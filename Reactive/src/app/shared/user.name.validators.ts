
//this function will used in aray of validations in app componant
import { AbstractControl } from "@angular/forms";

export
// input && if faild will return string else will retunt not anything
 function forbidenusername(control:AbstractControl):{[key:string]:any} |null{
    //if input contain "admin " ok it will be forbiden
    const forbiden=/admin/.test(control.value);
    
    
   
    // return forbideen
    return forbiden ? {'forbiddenName':{value:control.value}}:null;
}