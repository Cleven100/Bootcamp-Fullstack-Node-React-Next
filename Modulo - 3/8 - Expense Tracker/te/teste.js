var output = [];
var count = 1;

function fizzBuzz() {
 
    output.push(count);

   
        count++;
     

    

    if(count == 100) {
        console.log("fim");
    }
     else {
        
        if(count % 3 == 0)
        {
        
        output[count] = "Fizz"
    }
      if (count % 5 == 0)
    {
        
        output[count] = "Buzz"
    }
    if(count % 3 == 0 && count % 5 == 0)
    {
        
        output[count] = "FizzBuzz"
    }
     
    
    fizzBuzz(); 
    }

    
     
}



fizzBuzz();

output.forEach(element => {
    console.log(element);
});