import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appLowerCheckValidator]',
    providers: [{ 
        provide: NG_VALIDATORS,
        useExisting: LowerCheckValidatorDirective,
        multi: true
    }]
})

export class LowerCheckValidatorDirective implements Validator{
    @Input()
    appLowerCheckValidator!: string;
    validate(control: AbstractControl): {[key:string]: any} | null  {
      const lowerCaseLetter = '(?=.*[a-z])'; 
       if( !control.value?.match(lowerCaseLetter) ){
            return {'notLow': true};
       }    
            return null; 
    }
}