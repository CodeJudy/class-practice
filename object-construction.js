function ObjectConstructor(param1, param2) {
    this.key1 = param1;
    this.key2 = param2;

}
const object1 = new ObjectConstructor("first", "second");

// const object1 = {
//     key1: "first",
//     key2: "second"
// }

console.log(object1.key1);

function simpleFunction() {
    console.log(this);
}
// simpleFunction();

const object2 = {
    key1: "random",
    key2: function () {
        console.log(this);
    }
}

// console.log(object2);
object2.key2();