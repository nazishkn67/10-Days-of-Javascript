 
   function factorial(num)                            //function to calculate and return factorial of a number
    {
        if(num == 0)
        {
          return 1;
        } 
        else
        {
           return num * factorial(num-1);
        }
    }
