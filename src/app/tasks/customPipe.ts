import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'reverse',
    standalone:true
})
export class reverseSrting implements PipeTransform{
    transform(value:string){
        return value.split('').reverse().join('');
    }
}

// @Pipe({
//     name:'filter',
//     standalone:true
// })
// export class customsPi implements PipeTransform{
//     //  transform(value:string){
//     //     return value
//     //  }
// }