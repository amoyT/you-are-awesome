// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        value: 'value',
        enumerable: false
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    let magicObject = function () { };
    magicObject.__proto__ = magicObject.prototype;
    return magicObject;
};
const incrementor = () => {
    return 400;
};
const asyncIncrementor = () => { };
const createIncrementer = () => { };

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (argument) => { 
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            resolve(argument);
        }, 1000);
    })
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop))
            count += getDeepPropertiesCount(obj[prop]) + 1;

    }
    return count;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => { };
const sortByProto = (arr) => {
    arr.sort(function (a, b) {
        return a.__proto__ - b.__proto__;
    });
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;