import sinonTest from '../srces6/sinontest';

describe('sinon', function() {
    it('calls the original function', function() {
        var callback = jest.fn();
        var proxy = sinonTest.once(callback);

        proxy();

        expect(callback).toHaveBeenCalled();
    });
});
