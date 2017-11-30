// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variables defined with let in blocks don't
// change the value of variables outside the block
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet : " + sampLet + "<br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br />");
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
var randArray = [5, 6, 7, 8];
// for..in provides the indexes
for (var val in randArray) {
    document.write(val + "<br />");
}
// Convert a number array into a string array
var strArray = randArray.map(String);
// for..of provides the values
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
// ---------- CLASSES ----------
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
var Animal = (function () {
    // If you define an attribute with private
    // the value is automatically assigned
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    // You can define methods as private but then
    // it can't be seen by subclasses, or accessed
    // by any code other then that within the class
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    // Static methods are accessed using the class
    // name
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    // static fields have values that are shared
    // by every object
    Animal.numOfAnimals = 0;
    return Animal;
}());
// Create an Animal object
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's weight is " + spot.weight + "<br />");
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = 
        // super inherits Animal attributes
        _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
var Car = (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheels + " wheels<br />");
    };
    return Car;
}());
var Bicycle = (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("The bicycle drives with " + this.wheels + " wheels<br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
// You define a generic function that
// excepts any class that implements
// an interface
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
// You can also define generic classes that
// can work with multiple data types
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
// Define how we want add to work with numbers
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
// Define how we want add to work with strings
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + "<br />");
// Do the same with arrays
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Switch : " + x + y + z + "<br />");
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = "I go on for\n  many lines<br />";
document.write(multStr);
// You can use string interpolation
document.write("<b>" + multStr + "</b>");
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
function theSum(x, y, z) {
    document.write("Sum : " + (x + y + z) + "<br />");
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
// ---------- ENUMS ----------
// Enums are number based in TS
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
;
var myFeeling = Emotion.Happy;
// Same as
myFeeling = 1;
var _a;
