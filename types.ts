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

var myName: string = 'John';
var myAge: number = 41;
var canVote: boolean = true;

// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
console.log(anything);

// Arrays
// var strArr: string[] = ['Hello', 'World'];
// var numArr: number[] = [1,2,3]
// var boolArr: boolean[] = [true, false, true];

// same as above
var strArr:Array<string> = ['Hello', 'World'];
var numArr:Array<number> = [1,2,3]
var boolArr: Array<boolean> = [true, false, true];

// Tuple - must put in exact order by type
var strNumTuple: [string, number] = ['hello', 2];

var myVoid: void = null; //it also works undefined for this and below
var myNull: null = null;
var myUndefined: undefined = undefined;





// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types

interface SuperHero{
    realName: string;
    superName: string;
}
var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}