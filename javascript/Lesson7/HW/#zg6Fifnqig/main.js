class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella(`wasd0`, 122, 43),
    new Cinderella(`was1`, 122, 23),
    new Cinderella(`wasd1`, 122, 45),
    new Cinderella(`wasd2`, 122, 34),
    new Cinderella(`wasd3`, 122, 36),
    new Cinderella(`wasd4`, 122, 39),
    new Cinderella(`wasd5`, 122, 41),
];

const prince = new Prince(`asd1`, 123, 34)
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper){
        console.log(`Success!`)
    }
}

// const cinderella1 = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
// prince.wife = cinderella1;