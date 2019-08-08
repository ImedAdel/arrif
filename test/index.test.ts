import { arrif } from '../src';

describe('Conditional Array', () => {
  it('returns true condition', () => {
    expect(arrif('true', 'false', true)).toEqual('true');
  });

  it('returns false condition', () => {
    expect(arrif('true', 'false', false)).toEqual('false');
  });

  it('works with empty strings', () => {
    expect(arrif('true', 'false', '')).toEqual('false');
  });

  it('works with null', () => {
    expect(arrif('true', 'false', null)).toEqual('false');
  });

  it('works with undefined', () => {
    expect(arrif('true', 'false', undefined)).toEqual('false');
  });

  it('can be nested', () => {
    expect(arrif(arrif('if', 'else if', true), 'else', true)).toEqual('if');
  });
});
