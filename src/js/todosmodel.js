import { instanceOf } from "prop-types";

async function getAllToDos() {
  await fetch("https://assets.breatheco.de/apis/fake/todos/user/ashleylem1", {
    method: "POST",
    body: JSON.stringify([]),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/ashleylem1",
    {
      method: "GET",
      // body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  // console.log(data.map((todoInfo)=>{
  //   return todoInfo.label
  // }));
  // return data.map((todoInfo)=>{
  //   return todoInfo.label
  // })
  return data
}
async function updateToDos(a) {
  // let apiToDos= updateToDos.map((todoItem)=>{
  //   return{
  //     label: todoItem, 
  //     done: false,}
    
  // })
  await fetch("https://assets.breatheco.de/apis/fake/todos/user/ashleylem1", {
    method: "PUT",
    // body: JSON.stringify([apiToDos]),
    body: JSON.stringify(a),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { getAllToDos, updateToDos };
