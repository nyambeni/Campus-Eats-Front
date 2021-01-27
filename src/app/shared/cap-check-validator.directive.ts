import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appCapCheckValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CapCheckValidatorDirective,
        multi: true
    }]
})

export class CapCheckValidatorDirective implements Validator{
    @Input()
    appCapCheckValidator!: string;
    validate(control: AbstractControl): {[key:string]: any} | null  {
      const upperCaseLetter = '(?=.*[A-Z])'; 
       if( !control.value?.match(upperCaseLetter) ){
            return {'notCap': true};
       }    
            return null; 
    }
}