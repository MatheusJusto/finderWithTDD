import { expect } from 'chai'
import  { Main } from '../src/main'
// var expect = require('chai').expect
// var calc = require('../src/main.js')
describe('Finder', () => {
    describe('smoke tests', () => {
        // search (genérico) + - 1 tipo
        it('should exist the getUser method', () => {
            expect(Main.getUser).to.exist;
        })
    })
})