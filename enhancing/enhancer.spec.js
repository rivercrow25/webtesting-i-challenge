const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repaire()', () => {
        it('restores object durrability to 100', () => {
            const item = {
                name: 'worn sword',
                enhancement: 15,
                durability: 50
            }

            expect(item.durability).toBe(50)

            enhancer.repair(item)

            expect(item.durability).toBe(100)
        })
    })
    describe('succeed()', () => {
        it('increases the enhancement', () => {
            const item = {
                name: 'worn sword',
                enhancement: 0,
                durability: 50
            }
            expect(item.enhancement).toBe(0)

            enhancer.succeed(item)

            expect(item.enhancement).toBe(1)

            enhancer.succeed(item)
            enhancer.succeed(item)

            expect(item.enhancement).toBe(3)
        })
        it('doesnt enhance when item enhancement is 20', () => {
            const item = {
                name: 'op sword',
                enhancement: 20,
                durability: 50
            }

            expect(item.enhancement).toBe(20)
            enhancer.succeed(item)
            expect(item.enhancement).toBe(20)
        })
    })

    describe('fail()', () => {
        it('lowers durability currectly', () => {
            const item1 = {
                name: 'op sword',
                enhancement: 20,
                durability: 100
            }
            const item2 = {
                name: 'op sword',
                enhancement: 0,
                durability: 100
            }

            expect(item1.durability).toBe(100)
            expect(item2.durability).toBe(100)
            enhancer.fail(item1)
            enhancer.fail(item2)
            expect(item1.durability).toBe(90)
            expect(item2.durability).toBe(95)
        })
        it('lowers items with an enhancement over 14 by 1', () => {
            const item1 = {
                name: 'op sword',
                enhancement: 20,
                durability: 100
            }
            const item2 = {
                name: 'op sword',
                enhancement: 15,
                durability: 100
            }

            expect(item1.enhancement).toBe(20)
            expect(item2.enhancement).toBe(15)
            enhancer.fail(item1)
            enhancer.fail(item2)
            expect(item1.enhancement).toBe(19)
            expect(item2.enhancement).toBe(15)
            enhancer.fail(item1)
            enhancer.fail(item1)
            enhancer.fail(item1)
            expect(item1.enhancement).toBe(16)
        })
    })
    describe('get()', () => {
        it('doesnt update items with 0 enhancement', () => {
            const item = {
                name: 'op sword',
                enhancement: 0,
                durability: 100
            }
            expect(item.name).toBe(`op sword`)
            enhancer.get(item)
            expect(item.name).toBe(`op sword`)
        })
        it('updates item name to the correct value', () => {
            const item = {
                name: 'op sword',
                enhancement: 1,
                durability: 100
            }
            expect(item.name).toBe(`op sword`)
            enhancer.get(item)
            expect(item.name).toBe(`[+1]op sword`)
        })
    })
})
