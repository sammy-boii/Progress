let timeout = setTimeout(function(){
    alert("Hii!!");
},5000);
let a = prompt("Do you want to see a magic?");
if (a == 'NO')
{
    clearTimeout(timeout);
}
// console.log(timeout) => timer id which is usually 1

const sum =  (a,b,c) =>{
    console.log("Sum is", a+b+c)
    setTimeout
}
setTimeout(sum, 1000, 1, 2, 3);

// setInterval is same but repeats infinitely

let counter = 10;
const countInterval = setInterval(count, 1000)

function count ()
{
    console.log(counter--);
    if (counter < 0)
    {
        clearInterval(countInterval);
    }
}

// 10.. 9.. 8.. 7.. 6.. 5.. 4.. 3.. 2.. 1.. 0

//  counter < 0 ? clearInterval(countInterval) : null;