
function getArea(length, width) {           //declaring function to calculate area of rectangle
    
    let area;                               //declaring area variable with block scope
  
    area = length * width;                  //calculating area of rectangle
    return area;
}

function getPerimeter(length, width) {      //declaring function to calculate perimeter of rectangle
  
    let perimeter;                          //declaring perimeter variable with block scope
    
    perimeter =  2 * (length + width);      //calculating perimeter of rectangle
    return perimeter;
}
