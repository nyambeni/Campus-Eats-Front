import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appCheckMinimumValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CheckMinimumValidatorDirective,
        multi: true
    }]
})

export class CheckMinimumValidatorDirective implements Validator{
    @Input()
    appDigitCheckValidator!: string;
    validate(control: AbstractControl): {[key:string]: any} | null  {
        const mini = 7; 
        if( control.value?.length <= mini){
             return {'notMini': true};
        }    
             return null; 
     }
}
