const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', function(){
  it('should reject non-string values', function() {
    let string = 2333;
    let value = isRealString(string);
    expect(value).toBe(false);
  });
  it('should reject string with only spaces', function() {
    let string = '       ';
    let value = isRealString(string);
    expect(value).toBe(false);
  });
  it('should allow string with non space characters',  function() {
    let string = 'jeejee';
    let value = isRealString(string);
    expect(value).toBe(true);
  });
});
