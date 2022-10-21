<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'brand_id'=>'required|exists:brands,id',
            'itme_type_id'=>'required|exists:item_types,id',
            'item_number'=>'required|max:100',
            'unit'=>'required|max:555',
            // 'cad_cost'=>'required',
            // 'usd_cost'=>'required',
        ];
    }
}
