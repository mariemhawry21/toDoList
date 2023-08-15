/*Students Tasks:
[1] Use Sweet Alert If Input Is Empty
[2] Check If Task Is Exist
[3] Create Delete All Tasks Button
[4] Create Finish All Tasks Button
[5] Add To Tasks To The Local Storage
*/
let plusbtn = document.querySelector(".plus");
let deletebtn = document.querySelector(".delete");
let taskscont = document.querySelector(".tasks-cont");
let theinput = document.querySelector(".add-cont input");
const tasks = new Set();
window.onload = function () {
  theinput.focus();
};

let ntasks=document.querySelector(".tasks-count span");
let completedtasks=document.querySelector(".tasks-completed span");

function counter (){
let len=taskscont.children.length;
ntasks.innerHTML=len;
let allfinshed=document.querySelectorAll(".finshed ");
completedtasks.innerHTML=allfinshed.length;
}

plusbtn.onclick = function () {
  if (theinput.value ===" ") {
    swal({
      title: "Wrong",
      text: "You didn't insert any tasks!",
      icon: "error",
      button: "Ok",
    });
    theinput.focus();
  } else {
    if (tasks.has(theinput.value) === false && theinput.value!==" ") {
      tasks.add(theinput.value);
      let notaskmsg = document.querySelector(".no-tasks-message");
      if (document.body.contains(notaskmsg)) {
        // Remove No Tasks Message
        notaskmsg.remove();
      }
  
      //create span element
      let mainspan=document.createElement('span');
      let deletespan=document.createElement('span');
      let text=document.createTextNode(theinput.value);
      let deltext=document.createTextNode("Delete");

      mainspan.appendChild(text);
      mainspan.className="task-box";
      deletespan.appendChild(deltext);
      deletespan.className="delete";
      mainspan.appendChild(deletespan);
      taskscont.appendChild(mainspan);
      theinput.value=" ";
      theinput.focus();
      counter();
    }
  }
};
document.addEventListener('click',function(e){
if(e.target.className=="delete"){
    e.target.parentNode.remove();
    counter();
    //create no task span if there is no childs
    if(taskscont.children.length==0){
       createnotask();
    }
}
if (e.target.classList.contains('task-box')) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finshed");
    counter();
  }

});

let FinishAllbtn=document.querySelector(".finish-all");
let deleteAllbtn=document.querySelector(".delete-all");

FinishAllbtn.onclick=function(){
    let allelement=document.querySelectorAll(".task-box");
    for(let i=0;i<allelement.length;i++){
        allelement[i].classList.add("finshed");
    }
    counter();
};
deleteAllbtn.onclick=function(){
    let allelement=document.querySelectorAll(".task-box");
    for(let i=0;i<allelement.length;i++){
        allelement[i].remove();
    }
    counter();
    createnotask();

};

function createnotask(){
    let text=document.createTextNode("No Tasks To Show");
    let mainspan=document.createElement('span');
    mainspan.className="no-tasks-message";
    mainspan.appendChild(text);
    taskscont.appendChild(mainspan);
}




