import { Pipe, PipeTransform } from '@angular/core';

const COEFF = 0.83;
@Pipe({
  name: 'moneyConvertor'
})
export class MoneyConvertorPipe implements PipeTransform {

  transform(amount: number, ...args: number[]): number {
    if (args[0] === 0) {
      return amount / COEFF;
    }
    return amount * COEFF;
  }

}
