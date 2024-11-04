import {expect, should} from 'chai';
should(); //enable should syntax


const obj1 = {foo:'bar', baz:{nested:'object'}};
const obj2 = {foo:'bar', baz:{nested:'object'}};

describe('Chai Matchers Example', ()=>{
    it('should assert strict equality', ()=>{
        expect(obj1).to.deep.equal(obj2); // will pass
        expect(obj1).to.be.equal(obj2); // will fail
        expect([1,2,3]).to.not.equal([1,2,3,4]);  //will pass
        expect([1,2,3]).to.not.deep.equal([1,2,3,4]);  //will pass
        expect([1,2,3]).to.not.deep.equal([1,2,3]);  //will fail

        expect(obj1).to.be.an('object') // will pass
        expect(obj1).to.be.an('object').that.is.not.empty; // will pass
        expect({}).to.be.an('object').that.is.not.empty; //fail
        expect({}).to.be.an('object').that.is.empty; // will pass
        expect([1,2,3]).to.be.an('array').that.includes(2); //will pass

        expect([1,2,3]).to.have.lengthOf(3); // will pass

        expect(obj1).to.have.property('foo'); // will pass
        expect(obj1).to.have.nested.property('baz.nested'); // will pass
        expect(0.1 + 0.2).to.be.closeTo(0.31,0.1); //approximate value with delta
        expect(true).to.be.true; // will pass
    });


    it.only('should assertion', ()=>{
        obj1.should.deep.equal(obj2); // will pass
        obj1.should.be.an('object');
    })
})  

