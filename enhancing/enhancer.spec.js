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

    it("makes it successful",()=>{
        expect(enhancer.success({
            name: "fred",
            durability: 27,
            enhancement: 5
        })).toEqual({
            name: "fred",
            durability: 27,
            enhancement: 6
        })
        expect(enhancer.success({
            name: "fred",
            durability: 27,
            enhancement: 20
        })).toEqual({
            name: "fred",
            durability: 27,
            enhancement: 20
        })
    })

    it("fail",()=>{
        expect(enhancer.fail({
            name: "fred",
            durability: 27,
            enhancement: 5
        })).toEqual({
            name: "fred",
            durability: 22,
            enhancement: 5
        })
        expect(enhancer.fail({
            name: "fred",
            durability: 27,
            enhancement: 20
        })).toEqual({
            name: "fred",
            durability: 27,
            enhancement: 19
        })
        expect(enhancer.fail({
            name: "fred",
            durability: 27,
            enhancement: 15
        })).toEqual({
            name: "fred",
            durability: 17,
            enhancement: 15
        })
    })

})
