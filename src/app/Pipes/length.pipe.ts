import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

 transform(value:string,length?:number):string { 
       if(!value) return null;
    length = length?length:50;
    if(length>value.length){
    return value;
    }
    return value.substring(0,length)+'...'
  }
}
