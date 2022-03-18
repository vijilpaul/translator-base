import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyInr'
})
export class CurrencyInrPipe implements PipeTransform {

  transform(value: number, isSymbol: string, decPointer: string, isPrefix: boolean): any {
    if (!isNaN(value)) {
      let formattedValue;
      const currencyText = isSymbol;
      if (currencyText === '₹') {
        // for Indian number system
        formattedValue = new Intl.NumberFormat('en-IN').format(value);
      } else {
        formattedValue = new Intl.NumberFormat().format(value);
      }
      return currencyText + ' ' + formattedValue;
    }
  }

}
