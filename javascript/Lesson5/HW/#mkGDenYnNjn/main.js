const exchange = (uah, rates, curr) => {
    const rate = rates.find(r => r.currency === curr)?.value;
    return rate ? uah / rate : null;
};
console.log(exchange(10000, [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
], 'USD'));