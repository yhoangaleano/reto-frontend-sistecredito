export const VALIDATION_ERRORS_MESSAGES = [
    { name: 'required', text: '* El campo es requerido.', rules: ['dirty'] },
    { name: 'minlength', text: `* El campo no cumple con el mínimo de caracteres ingresados.`, rules: ['dirty', 'touched'] },
    { name: 'maxlength', text: `* El campo no cumple con el máximo de caracteres permitidos.`, rules: ['dirty', 'touched'] },
    { name: 'pattern', text: `* El campo no cumple con el formato establecido.`, rules: ['dirty', 'touched'] },
    { name: 'min', text: `* El campo debe superar en número mínimo permitido.`, rules: ['dirty', 'touched'] },
    { name: 'max', text: `* El campo supera el número máximo permitido.`, rules: ['dirty', 'touched'] },
    { name: 'email', text: `* El correo electrónico no es válido.`, rules: ['dirty', 'touched'] },
];
