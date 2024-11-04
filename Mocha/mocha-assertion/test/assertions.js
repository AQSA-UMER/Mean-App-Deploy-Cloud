const assert = require('assert');

describe("Assertion Example", ()=>{
    it('should check equality', ()=>{
        // assert.equal(2+2,4); //will pass (loose equality) 
        // assert.strictEqual(2+2,4); //will pass
        // assert.strictEqual('2'+2,4); //will fail
        // assert.strictEqual('2'+2,22); //will fail
        // assert.equal('2'+2,22); //will pass

        // assert.notEqual('5',5); //will fail
        // assert.notStrictEqual('5',5) //will pass

    });

    it('should check deep euqlity', ()=>{
        // assert.deepEqual({a:[1,2]}, {a:[1,2]}); //will pass
        // assert.deepEqual({a:['1',2]}, {a:[1,2]}); //will pass
        // assert.deepStrictEqual({a:['1',2]}, {a:[1,2]}); //will fail
        // assert.deepEqual({a:[{b:{c:1,d:2}},2]}, {a:[{b:{c:1,d:2}},2]}); //will pass
        // assert.strictEqual({a:[{b:{c:1,d:2}},2]}, {a:[{b:{c:1,d:2}},2]}); //will fail
        // assert.notdeepEqual({a:[{b:{c:1,d:2}},2]}, {a:[{b:{c:1,d:2}},2]}); //will fail
       
    });

    //Truthiness Assertions
    it('should check truthiness', ()=>{
        // assert.ok(1, '1 is truthy') // will pass
        // assert.ok(0, '0 is falsy') // will fail
        // let val = true;
        // assert.ok(val,'val is truthy');  //will pass
        // let val = false;
        // assert.ok(val,'val is non truthy');  //will fail
        // let val = null;
        // assert.ok(val,'val is not truthy'); //will fail

    });

    //Inclusion Assertions
    it('should check inclusion', ()=>{
        // assert.ok([1,2,3].includes(2)); //will pass
        // assert.ok('Hello World'.includes("Hello")); //will fail
        // assert.ok('Hello World'.includes("hello")); //will fail
        // assert.ok('Hello World'.toLowerCase().includes("hello".toLowerCase())); //will pass
    });

    //Satisfaction Assertions
    it('should check satisfaction', ()=>{
        assert.ok(5 > 3 );  // will pass
        assert.ok(5 >= 3 );  // will pass
        assert.ok(5 == 5 ); //fail
        assert.ok('5' === 5 ); //fail
    })
})

