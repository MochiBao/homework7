function spliceArray (array) {
    const arr = array.splice(2, 3)
    return arr;
}
const b = spliceArray( ["I", "study", "JavaScript", "right", "now"]);
console.log('b :>> ', b);



function sliceArray(array) {
    const arr = array.slice(0, 2);
    return arr;
}
const a = sliceArray(["I", "study", "JavaScript", "right", "now"]);
console.log('a :>> ', a);


function concatArr(array1, array2) {
    const arr = array1.concat(array2);
    return arr;
}
const c = concatArr(["I", "study"], ["JavaScript", "right", "now"] );
console.log('c :>> ', c);