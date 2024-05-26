document.querySelector("form").addEventListener("submit",myFun);

function myFun(event){
    event.preventDefault();
    let name = document.querySelector("#task").value;
    let prior = document.querySelector("#priority").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = name;

    let td2 = document.createElement("td");
    td2.innerText = prior;
    if(td2.innerText == "Low"){
        td2.style.backgroundColor = "green";
        td2.style.color = "white";
    }else if(td2.innerText == "High"){
        td2.style.backgroundColor = "red";
        td2.style.color = "white";
    }
   

    let td3 = document.createElement("td");
    td3.innerText = "Delete"
    td3.style.backgroundColor = "red";
    td3.style.color = "white"
         tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr);

    td3.addEventListener("click",toDo);

    function toDo(event){
       event.target.parentNode.remove();
    }
}




// document.querySelector("form").addEventListener("submit", MyFun);


// function MyFun(event) {
//     event.preventDefault();
//     let nam = document.querySelector("#task").value;
//     let pri = document.querySelector("#priority").value;

//     let tr = document.createElement("tr");
//     let td = document.createElement("td");
//     td.innerText = nam;

//     let td1 = document.createElement("td");
//     td1.innerText = pri;
//     if (td1.innerText == "Low") {
//         td1.style.backgroundColor = "red";
//     } else {
//         td1.style.backgroundColor = "green";
//     }
//     let td2 = document.createElement("td");
//     td2.innerText = "Delete";
//     td2.style.backgroundColor = "red";

//     document.querySelector("tbody").append(tr);
//     tr.append(td, td1, td2);

//     td2.addEventListener("click", del);

//     function del(event) {
//         //  tr.innerText = "";
//         event.target.parentNode.remove();
//     }

// }