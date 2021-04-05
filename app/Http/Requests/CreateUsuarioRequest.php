<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest as LaravelFormRequest;

class CreateUsuarioRequest extends LaravelFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    protected function failedValidation(Validator $validator)
    {
        
        $errors = (new ValidationException($validator))->errors();

        throw new HttpResponseException(
            response()->json(['errors' => $errors], JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
        );
        
    }

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
            'nombre' => 'required|max:45',
            'email' =>'required|max:45',
            'paterno' => 'required|max:45',
            'materno' => 'max:45',
            'rfc' => 'required|max:13',
            'curp' => 'required|max:20',
            'num_seguro_social' => 'required|max:20',
            'telefono1' => 'required|max:10',
            'tipo_persona_sat' => 'required',
            'd_calle' => 'required|max:45',
            'd_colonia' => 'required|max:45',
            'd_estado' => 'required',
            'd_municipio' => 'required',
            'd_cp' => 'required',
            'usuario' => 'sometimes|required|min:3|max:20|unique:users,name',
            'password' => 'required|min:5|confirmed',
            'cat_roles' => 'required',

        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'Por favor, escribe tu nombre',
            'nombre.max' => 'No puede superar los 45 caracteres el nombre',
            'usuario.required' => 'Por favor, escribe un usuario',
            'usuario.min' => 'El usuario debe superar 3 caracteres',
            'usuario.max' => 'No puede superar los 20 caracteres el usuario',
            'usuario.unique' => 'Por favor, el usuario ya existe, indicar otro',
            'email.required' => 'Por favor, escribe tu email',
            'email.max' => 'No puede superar los 45 caracteres el email',
            'paterno.required' => 'Por favor, escribe apelledo paterno',
            'paterno.max' => 'No puede superar los 45 caracteres el apellido paterno',
            'materno.max' => 'No puede superar los 45 caracteres el apellido materno',
            'rfc.max' => 'No puede superar los 13 caracteres el rfc',
            'rfc.required' => 'Por favor, escribe tu rfc',
            'curp.max' => 'No puede superar los 20 caracteres el curp',
            'curp.required' => 'Por favor, escribe tu curp',
            'num_seguro_social.required' => 'Por favor, escribe un numero de seguro social',
            'num_seguro_social.max' => 'No puede superar los 20 caracteres el numero de seguro social',
            'calle.required' => 'Por favor, escribe tu direccion',
            'calle.max' => 'No puede superar los 45 caracteres la calle',
            'colonia.required' => 'Por favor, escribe tu colonia',
            'colonia.max' => 'No puede superar los 45 caracteres la colonia',
            'estado.required' => 'Por favor, selecciona un estado',
            'municipio.required' => 'Por favor, selecciona un municipio',
            'cp.requered' => 'No puede superar los 10 caracteres el cp',
            'cp.max' => 'No puede superar los 10 caracteres el cp',
            'password.required' => 'Por favor, escribe una contraseña',
            'password.min' => 'Por favor, escribe una contraseña con 6 caracteres minimos',
            'password.confirmed' => 'La contraseña no coincide',
            'cat_roles.required' => 'Por favor, selecciona un rol',
            'telefono1.max' => 'Por favor, ingreso un numero de 10 digitos',
            'telefono1.numeric' => 'Por favor, digita solo numeros telefonicos',
            'telefono1.required' => 'Por favor, digita un numero telefonico',
            'tipo_persona_sat.required' => 'Por favor, indica el tipo persona',
            'd_colonia.required' => 'Por favor, indica una colonia',
            'd_cp.required' => 'Por favor, indica un cp',

        ];
    }


}
