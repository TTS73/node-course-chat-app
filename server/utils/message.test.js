const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', function() {
  it('should generate correct message object', function() {
    let from = 'joku', text = 'jees';
    let res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', function() {
  it('should generate correct location object', function(){
    let from = 'Deb';
    let latitude = 15;
    let longitude = 19;
    let url = 'https://www.google.com/maps?q=15,19'
    let message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});


  });
});
