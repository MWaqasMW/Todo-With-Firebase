import {db, collection, addDoc,query, onSnapshot , doc, deleteDoc ,getDocs , serverTimestamp,orderBy,updateDoc} from './firebase.js'


const addTodo= document.getElementById("addTodo")

addTodo.addEventListener("click",()=>{
    
    let input = document.getElementById("input");
  

        const docRef =  addDoc(collection(db, "todos"), {
            value:input.value,
            timestamp: serverTimestamp(),
            
        });
        console.log("Document written with ID: ", docRef.id);
        
        input.value=""
    }

    
)



let todoList=document.getElementById("todo-list")
const getAllTodos=()=>{


    const q = query(collection(db, "todos"),orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({
          id: doc.id,
          value: doc.data().value,
          timestamp:doc.data().timestamp,

    });
});
todoList.innerHTML='';
todos.map((todo, index)=>{
    let time = todo.timestamp ? moment(todo.timestamp.toDate()).fromNow() : moment().fromNow()
    console.log(time)

    todoList.innerHTML +=`
    <li>
        <div class="input-group ">
        <input id="output" type="text" value=${todo.value}  class="form-control" placeholder="Add Todo"
        <span class="time"></span>
        </div>
        <div class="btn-opt my-1">
        <button class="btn btn-danger" onclick="del('${todo.id}')" type="button">Delete</button>
        <button class="btn btn-secondary" onclick="edit('${todo.id}')" type="button">Update</button>
        <span class="secondary">${time}</span>
        </div>
        </li>
        `
    })
});

}

getAllTodos();

let del=async(id)=>{
     deleteDoc(doc(db, "todos", id));
}
window.del =del


const ids = []
let clearAllTodos= document.getElementById("clearAllTodos")
 clearAllTodos.addEventListener("click", async() => {
    
    const q = query(collection(db, "todos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        ids.push(doc.id)
    });
    
    console.log(ids)
    for(let i=0; i < ids.length; i++){
        console.log(ids[i])
        await deleteDoc(doc(db, "todos", ids[i]));
    }
});


let edit= async(id)=>{
const todoRef = doc(db, "todos", id);
let output = document.getElementById("output");
console.log(output.value)
await updateDoc(todoRef, {
    value: output.value 
});

console.log(id)
}

window.edit=edit


