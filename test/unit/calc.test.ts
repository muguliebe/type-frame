import { add } from '../../src/util/calc'

describe('calc Basic', () => {
    it('normal', () => {
        expect(add(1, 1)).toEqual(2)
    })
})
