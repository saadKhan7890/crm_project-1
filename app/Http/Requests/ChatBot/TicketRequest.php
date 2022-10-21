<?php

namespace App\Http\Requests\ChatBot;

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
            'item_number' => 'required|exists:App\Models\Product,item_number|max:100',
            'serial'=>'max:255'
        ];
    }
}
