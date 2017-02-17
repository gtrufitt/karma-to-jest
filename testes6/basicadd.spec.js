import basicAdd from '../srces6/basicadd';

describe('Basic Add', function() {
    it('should add together 2 numbers', function() {
        expect(basicAdd(2, 3)).toBe(5);
    });
});
