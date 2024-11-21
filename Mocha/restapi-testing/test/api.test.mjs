import { expect, assert } from 'chai';
import request from 'supertest';
import app from '../app.mjs';

describe('API Tests', function(){
    describe('GET /api/items', ()=>{
        it('should return a list of items', (done)=>{
            request(app)
            .get('/api/items')
            .expect(200)
            .end((err,res)=>{
                if(err) return done(err);
                expect(res.body).to.be.an('array').that.is.not.empty;

                const item = res.body.find((item)=> item.name === "item 1");
                expect(item).to.not.be.undefined; //Ensure the item exists
                if(item){
                    assert.strictEqual(item.name,'item 1'); //this is line 16
                    
                }

                done();
                
            })
        })
    });

    describe('POST /api/items', ()=>{
        it('should create a new Items', (done)=>{
            const newItem = {name:'Item2'};
            request(app)
            .post('/api/items')
            .send(newItem)
            .end((err,res)=>{
                if(err) return done(err);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name');
                done();
            })
        })

    })
})  

