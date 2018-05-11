// import { Directive } from "@angular/compiler";

// import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: "[upperCase]",
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: UpperCaseValidatorDirective,
//       multi: true
//     }
//   ]
// })
// export class UpperCaseValidatorDirective implements Validator {
//   validate(control: AbstractControl): { [key: string]: any } {
//     const valor = control.value;
//     if (valor) {
//       return valor !== valor.toUpperCase() ? { upperCase: { valor } } : null;
//     } else {
//       return null;
//     }
//   }
// }
