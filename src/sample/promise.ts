const returnPromise = () => new Promise(resolve => setTimeout(() => {
    resolve(3);
}, 3000));

export { returnPromise };