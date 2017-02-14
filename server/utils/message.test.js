const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', function() {
  it('should generate correct message object', function() {
    let from = 'joku', text = 'jees';
    let res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeA('number');
  });
});
