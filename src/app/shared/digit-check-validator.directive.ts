import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appDigitCheckValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DigitCheckValidatorDirective,
        multi: true
    }]
})

export class DigitCheckValidatorDirective implements Validator{
    @Input()
    appDigitCheckValidator!: string;
    validate(control: AbstractControl): {[key:string]: any} | null  {
        const digitCheck = '[0-9]'; 
        if( !control.value?.toString().match(digitCheck) ){
             return {'notDigit': true};
        }    
             return null;
     }
}