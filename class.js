class ObjectConstructor {
    constructor(param1, param2) {
        this.key1 = param1;
        this.key2 = param2;
    }

    // objektumszintű metódus
    addKeys() {
        return `${this.key1} valamiszöveg ${this.key2}`
    }
    static classLevelMethod(o) {   //o-betű
        return `blabla ${o.key1} ${o.key2}`
    }
}

const object1 = new ObjectConstructor("first", "second")

console.log(object1.key1);

console.log(object1.addKeys());

// Így el tudjuk érni
console.log(ObjectConstructor.classLevelMethod(object1));