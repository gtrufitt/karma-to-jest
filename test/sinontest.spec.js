define(['sinontest'], function(sinonTest) {
    describe('sinon', function() {
        it('calls the original function', function() {
            var callback = sinon.spy();
            var proxy = sinonTest.once(callback);

            proxy();

            expect(callback.called).toBe(true);
        });
    });
});
