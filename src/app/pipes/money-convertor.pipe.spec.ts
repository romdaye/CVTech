import { MoneyConvertorPipe } from './money-convertor.pipe';

describe('MoneyConvertorPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyConvertorPipe();
    expect(pipe).toBeTruthy();
  });
});
