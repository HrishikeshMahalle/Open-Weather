let arr = [0,9,3,4,7,31]

function rescur1(x){
const newNum = x-1;
  if(arr[x-1]%2 === 0){
    console.log("Even")
  } else{
    console.log("Odd")
  }
  if(newNum > 0){
    rescur1(newNum)
  }else{
    console.log("Finished")
  }

}

rescur1(arr.length) //function call


/* let fruits = ["Banana", "Orange", "Apple", "Mango"];
const fs = require('fs')
fruits.forEach(ari);



function ari(x){
  fs.writeFile('test.txt',x,{ flag: 'a' }, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
} */