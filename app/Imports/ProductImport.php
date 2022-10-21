<?php

namespace App\Imports;

use App\Models\Product;
use App\Models\ItemType;
use App\Models\Brand;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{ToCollection, WithHeadingRow, WithValidation};

class ProductImport implements ToCollection, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function collection(Collection $rows)
    {

        $data_array = array();
        $noBrand = array();
        $j = 0;

        foreach ($rows as $row) {

            $brand = str_replace('/-\d+$/', '', $row['brand']);
            if ($brand != '') {
                $check = Brand::where('brand_name', $brand)->get();
                if ($check->isEmpty()) {
                    $noBrand[$j++] = $brand;
                }
            }
            /* Product::updateOrCreate(
            	[
            		'item_number' => $row['model_number'],
            	],
            	[
            		'brand_id' => $row['brand_id'],
            		'itme_type_id' => $row['itme_type_id'],
            		'unit' => $row['unit'],
            		'cad_cost' => $row['cad_cost'],
            		'usd_cost' => $row['usd_cost'],
            		'depth' => $row['depth'],
            		'width' => $row['width'],
            		'height' => $row['height'],
            		'weight' => $row['weight'],
            		'fedex_dimensional_weight' => $row['fedex_dimensional_weight']
            	]
            ); */
        }
        $data_array = $noBrand;
        if (count($data_array) > 0) {
            $this->data = $data_array;
        } else {
            foreach ($rows as $row) {

                $brand_name = str_replace('/-\d+$/', '', $row['brand']);
                $item_class_name = str_replace('/-\d+$/', '', $row['item_class']);

                if (Brand::where('brand_name', $brand_name)->exists() || ItemType::where('name', $item_class_name)->exists()) {

                    $brand_id = Brand::where('brand_name', $brand_name)->first();
                    $ItemType_id = ItemType::where('name', $item_class_name)->first();
                    $fedex_dimensional_weight = $row['fedex_dimensional_weight'] == '' ? 0 : $row['fedex_dimensional_weight'];

                    Product::insert([
                        'brand_id' => $brand_id->id,
                        'itme_type_id' => $ItemType_id->id,
                        'item_number' => trim($row['itemnmbr']),
                        'unit' => trim($row['unit']),
                        'cad_cost' => $row['cad_cost'],
                        'usd_cost' => $row['usd_cost'],
                        'depth' => $row['depth'],
                        'width' => $row['width'],
                        'height' => $row['height'],
                        'weight' => $row['weight'],
                        'fedex_dimensional_weight' => $fedex_dimensional_weight
                    ]);
                }
            }
            $this->data = array();
        }
    }
    
    public function getDatas(): array
    {
        return $this->data;
    }
}
