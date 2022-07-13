
// let list = document.getElementById('list');

// let data = "";
// for( let i = 1 ;i<=10; i++){
//     data += `<li> ${i} </li>`;  // data = data + `<li> ${i} </li>`
// }

// list.innerHTML = data;


// let x = 8;

// let y = 9;

// x+=y; //x = x+y;

// function Add(){
//  let num = document.getElementById("num");


//  let data = "";
//  for(let i = 1; i<=num.value; i++){
//     data += `<input type="text" class="inp" placeholder="musteri ${i}" />`;
//  }

//  document.getElementById("show").innerHTML = data;



//  let x = document.getElementsByClassName('inp');



// // for(let i = 0; i<x.length; i++){
// //     console.log(x[i]);
// // x[i].style.margin = '30px'
// // }


// // niye .length istifade olundu and what is x[i]
// }



let row = document.getElementById('row');

let data = "";
for( let i = 1 ;i<=3; i++){
    data += `<tr id= 'cell ${i} '> </tr>`;
}

row.innerHTML = data;

let cell = document.getElementById(`cell ${i} `); 
let data1 = ""; 
for( let x = 1; x<=3; x++){
    data1 += `<td> yer ${x}  </td>`
}

cell.innerHTML = data1

