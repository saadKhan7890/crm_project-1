<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AscRequest extends FormRequest
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
            'tv_m_f'=>'required|max:100',
            'name'=>'required|max:255',
            'address'=>'required|max:255',
            'city'=>'required|max:100',
            'province'=>'required|max:100',
            'zip_code'=>'required|max:100',
            'phone'=>'required|max:50',
            'email'=>'required|max:255|email',
            'user_id'=>'required|exists:users,id',
        ];
    }
}
