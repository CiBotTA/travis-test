const isBuildSuccess = require("./build.config");
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe("Build Fail or Success", function(){
  it('should return true if build is success', function(){
    assert.equal(true, isBuildSuccess);
  })
  
});
fail
