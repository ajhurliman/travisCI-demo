var expect = require('chai').expect;
var Counter = require ('../counter');
var testCounter = new Counter();

describe('a counter object', function() {
  it('should start at zero', function(done) {
    expect(testCounter.getValue()).to.eql(0);
    done();
  });

  it('should have a function that increments the count', function(done) {
    testCounter.increment();
    expect(testCounter.getValue()).to.eql(1);
    done();
  });
});
