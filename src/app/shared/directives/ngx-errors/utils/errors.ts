export const VALIDATION_ERRORS_MESSAGES = [
    { name: 'required', text: 'El campo es requerido.', rules: ['dirty'] },
    { name: 'minlength', text: `El campo no cumple con el mínimo de caracteres ingresados.`, rules: ['dirty'] },
    { name: 'maxlength', text: `El campo no cumple con el máximo de caracteres permitidos.`, rules: ['dirty'] },
    { name: 'pattern', text: `El campo no cumple con el formato establecido.`, rules: ['dirty'] },
    { name: 'min', text: `El campo debe superar en número mínimo permitido.`, rules: ['dirty'] },
    { name: 'max', text: `El campo supera el número máximo permitido.`, rules: ['dirty'] },
    { name: 'email', text: `El correo electrónico no es válido.`, rules: ['dirty'] },
];
