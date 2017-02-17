define(['basicadd'], function(basicAdd) {
    describe('Basic Add', function() {
        it('should add together 2 numbers', function() {
            expect(basicAdd.add(2, 3)).toBe(5);
        });
    });
});
