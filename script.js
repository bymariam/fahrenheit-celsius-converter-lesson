alert()
let inputFObj = document.getElementById("inputF")
let inputCObj = document.getElementById("inputC")

let fValue = inputFObj.value
console.log(fValue)
fValue = parseInt(fValue)

let c = (fValue - 32) * 5/9
inputCObj.value = c
console.log(c)

if (c >= 30) { 
console.log ("wow, that's hot")
}
  
else {
    console.log ("the temp is nice")
}
