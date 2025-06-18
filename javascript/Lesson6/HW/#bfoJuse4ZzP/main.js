let str = `Ревуть воли як ясла повні`;
    function stringToArray(str){
        if (str) {
            const split = str.split(` `);
            return split;
        }
        return [``];
    }
console.log(stringToArray(`Ревуть воли як ясла повні`))