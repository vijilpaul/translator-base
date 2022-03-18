import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacePipe'
})
export class ReplacePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string, strToReplace: string, replacementStr: string): string {

    if(!value || ! strToReplace || ! replacementStr)
    {
      return value;
    }
    return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
  }
}
