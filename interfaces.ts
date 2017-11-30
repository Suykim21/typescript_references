/*

function showTodo(todo: {title: string, text:string}){
    console.log(todo.title+': '+todo.text);
}

let myTodo = {title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);

*/

// simpler version than above
interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo){
    console.log(todo.title+': '+todo.text);
}

var myTodo = {title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);

interface SuperHero{
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

console.log(superman.realName, superman.superName);