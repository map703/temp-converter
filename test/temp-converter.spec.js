const expect = require('chai').expect;
const convertToCfromF = require('../temp-converter')
const convertToFfromC = require('../temp-converter')

describe('F to C', function(){
    it ('exists',function(){
        expect (convertToCfromF(4)).to.be.ok
    })
})

describe('C to F', function(){
    it ('exists',function(){
        expect(convertToFfromC(4)).to.be.ok
    })
})