import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable()
export class ValidarFormulariosService {

    public validarFormulario(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormArray) {
                for (const control1 of control.controls) {
                    if (control1 instanceof FormControl) {
                        this.validarControl(control1);
                    }
                    if (control1 instanceof FormGroup) {
                        this.validarFormulario(control1);
                    }
                }
                this.validarControl(control);
            }
            if (control instanceof FormControl) {
                this.validarControl(control);
            } else if (control instanceof FormGroup) {
                this.validarFormulario(control);
            }
        });
    }

    public validarControl(control: FormControl | FormArray): void {
        control.markAsDirty();
        control.markAsTouched();
        // El emitEvent en false lo que evita es que si tenemos valueChanges de algún control
        // o del formulario en si, al validar con esta función no se emita algún cambio y se
        // propague un evento que no queremos
        control.updateValueAndValidity({ emitEvent: false });
    }

}
