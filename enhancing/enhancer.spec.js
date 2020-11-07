const { it } = require('@jest/globals');
const enhancer = require('./enhancer.js');

describe("calculator unit tests",() => {

    it("repairs",()=>{
        expect(enhancer.repair({
            name: "fred",
            durability: 27,
            enhancement: 5
        })).toEqual({
            name: "fred",
            durability: 100,
            enhancement: 5
        })
    })
})
