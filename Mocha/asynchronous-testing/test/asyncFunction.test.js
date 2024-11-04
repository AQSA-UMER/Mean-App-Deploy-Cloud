// asynchronous-testing/test/asyncFucntion.test.js
const assert = require('assert');
const fetchData = require('../src/asyncFucntion');

describe("asynchronous Operations", ()=>{
    it('should fetch user data', (done)=>{
        fetchData((err, data) =>{
            if(err){
                return done(err);
            }
            try{
                assert.strictEqual(data.name,'Aqsa');
                done();//signal completion of test
            }
            catch(assetionError){
                done(assetionError);
            }
        })
    });
})
