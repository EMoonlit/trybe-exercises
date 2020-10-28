const myFunc = callback => {
    const value = 77;

    return callback(value);
};

myFunc(number => {
    console.log(number);
});