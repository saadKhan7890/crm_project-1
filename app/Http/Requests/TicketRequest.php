<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketRequest extends FormRequest
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
            'first_name' => 'required|max:255',
            'last_name' => 'max:255',
            'email' => 'required|email|max:255',
            'phone' => 'max:100',
            'brand_id'=>'required|exists:brands,id',
            'itme_type_id'=>'required|exists:item_types,id',
            'product_id' => 'required|exists:products,id',
            'issue' => 'required|exists:common_issues,id',
            'serial' => 'max:255',
            // 'purchase_date' => 'sometimes|date',
            // 'resolution'
        ];
    }
}
