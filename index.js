var key_init
var B64XorCipher = {
  init: function(key){
    key_init = key
  },
  encode: function(data, key) {
    return new Buffer.from(xorStrings(key||key_init, data),'utf8').toString('base64');
  },
  decode: function(data, key) {
    data = new Buffer.from(data,'base64').toString('utf8');
    return xorStrings(key||key_init, data);
  }
};

function xorStrings(key,input){
  var output='';
  for(var i=0;i<input.length;i++){
    var c = input.charCodeAt(i);
    var k = key.charCodeAt(i%key.length);
    output += String.fromCharCode(c ^ k);
  }
  return output;
}

module.exports = B64XorCipher;