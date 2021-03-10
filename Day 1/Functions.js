 
   function factorial(n)                            //function to calculate and return factorial of a number
    {
        if(n == 0)
        {
          return 1;
        } 
        else
        {
           return n * factorial(n-1);
        }
    }
