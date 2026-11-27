import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  //  transform(value: string) {
  //    const prefix='Hello,'
  //    const finalValue=prefix.concat(value+'!')
  //    return finalValue;
  //  }

  //  transform(value: any, args:string) {
  //    return `${args}, ${value}!`
  //  }

  transform(value: string | null, limit: number): string {
    if(!value){
      return '';
    }
    let extractedValue = '';
    if (value != '' && value && value.length > limit) {
      for (let i = 0; i < limit; i++) {
        extractedValue = extractedValue + value[i]
      }
      return extractedValue + '...'
    }
    return value
  }

}
