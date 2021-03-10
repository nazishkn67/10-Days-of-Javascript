
function main() 
{
    const PI = Math.PI;           //declares and intializes PI
    let r = +(readLine());        //declares and initializes radius variable with block scope
  
    console.log(PI * r * r);      //prints radius of circle
    console.log(2 * PI * r);      //prints perimeter of circle
} 
