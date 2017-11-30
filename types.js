/*

TypeScript Types
-String
-Number
-Boolean
-Array
-Any
-Void
-Null
-Tuple
-Enum
-Generics

*/
var myName = 'John';
var myAge = 41;
var canVote = true;
// A variable marked as any is a dynamic type
var anything = "dog";
anything = 2;
console.log(anything);
// Arrays
// var strArr: string[] = ['Hello', 'World'];
// var numArr: number[] = [1,2,3]
// var boolArr: boolean[] = [true, false, true];
// same as above
var strArr = ['Hello', 'World'];
var numArr = [1, 2, 3];
var boolArr = [true, false, true];
// Tuple - must put in exact order by type
var strNumTuple = ['hello', 2];
var myVoid = null; //it also works undefined for this and below
var myNull = null;
var myUndefined = undefined;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
