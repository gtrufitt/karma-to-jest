function once(fn) {
    var returnValue, called = false;
    return () => {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

export default {
    once: once
};
