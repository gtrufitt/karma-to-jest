define(['test1', 'test2', 'sinontest'], function(test1, test2, sinontest) {
    describe('test1', function() {
        console.log(test1);
        it('should add together 2 numbers', function() {
            expect(test1.add(2, 3)).toBe(5);
        });
    });

    describe('test2', function() {
        console.log(test2);
        it('should return a value', function() {
            expect(test2).toBe('string');
        });
    });

    describe('sinon', function() {
        it('calls the original function', function() {
            var callback = sinon.spy();
            var proxy = sinontest.once(callback);

            proxy();

            expect(callback.called).toBe(true);
        });
    });
});
