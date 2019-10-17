import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const PasswordSameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const password2 = control.get('conf_password');

  return password && password2 && password.value === password2.value ? null : {'NotSame': true};
};
