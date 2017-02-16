# Converting Jasmine, Karma, Require and Sinon to use ES6 modules and Jest

## Structure

```
- src (Requirejs files)
- test (Requirejs test specs)
- srces6 (es6 files)
- testes6 (es6 test specs)
```

## Jest config

### Ignoring the Karma tests

*Probably want to just include a specific folder in reality.*

In `package.json`:

```
"jest": {
  "testPathIgnorePatterns": [
    "/test/"
  ]
}
```
### Sinon

Convert the Sinon functions to use `jest.fn()`?

*Note:* This will probably be [renamed in Jest at some point](https://github.com/facebook/jest/issues/1679).

There is [spyOn coming in Jest but there's no docs right now.](https://github.com/facebook/jest/blob/66a00f0d98b31c32a4c40cda9ba264c600bd6ed2/packages/jest-runtime/src/__tests__/Runtime-jest-spyOn-test.js)

This works though:

```
it('calls the original function', function() {
    var callback = sinon.spy();
    var proxy = sinontest.once(callback);

    proxy();

    expect(callback.called).toBe(true);
});
```

becomes:

```
it('calls the original function', function() {
    var callback = jest.fn();
    var proxy = sinontest.once(callback);

    proxy();

    expect(callback).toHaveBeenCalled();
});
```
