function calculateTaxes(income) {
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }
  
//   console.log(calculateTaxes(500))
function removesDupes(values){
const arr =  [...new Set(values)];
if (typeof values === 'string') return arr.join('')
    return arr;
}

let usernames = [];
let input = document.getElementById('username');

function submitForm(){
    usernames.push(input.value);
}

//inpure
function append(arr,val){
    arr.push(val);
}
//pure 
function appendPure(arr, val){
    return[...arr, val]
}