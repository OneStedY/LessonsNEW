function cloner(obj){
    if (obj){
        let functions = [];
        for (const key in obj) {
            for (const key in obj) {
                if (typeof obj[key] === `function`){
                    const functionClone = obj[key].bind({});
                    functions.push({functionClone, key})
                }
                
            }
        }
        console.log(functions);
        const cloneObject = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObject[func.key] = func.functionClone;
        }
        console.log(cloneObject)
        return cloneObject
    }

    throw new Error(`!`);

}
const clone = cloner({id:123, name:`asd`, function() {`test1`}, c() {`test2`} });
console.log(clone.c);