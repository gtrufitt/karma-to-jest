import test1 from '../srces6/test1';
import test2 from '../srces6/test2';
import sinontest from '../srces6/sinontest';

describe('test1', function() {
    console.log(test1);
    it('should add together 2 numbers', function() {
        expect(test1(2, 3)).toBe(5);
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
        var callback = jest.fn();
        var proxy = sinontest.once(callback);

        proxy();

        expect(callback).toHaveBeenCalled();
    });
});
