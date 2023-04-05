// # Error Handling
    
//     ## Keywords
//         * try
//         * catch
//         * finally
//         * throw
//         * Error




// * try
// try out some code
    // if an error occurs (if an error is thrown)
    // how do we know if its a true error thats thrown?, theres a native java script constructor that helps create a error object (throw new Error)
try {
    if(2 === 2){
        throw new Error ("Hey I am an error!")
}
console.log('did i console log?') // this didnt run becauwse an error was thrown and it wants the catch to handle it 
    // throw throws it to catch who displays the error
}
// try and catch have to be used together 
catch(err){
    // handle the err
    console.log(err)
}

// * finally
// finally's purpose is to run after try and catch completed but it will always run anyway

finally{
    console.log("I am running no matter what!") 
}

// Logical OR ( ||) operator (logical disjunction

function sumNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return num1 + num2;
  }
  const result = sumNumbers(4, 6);
console.log(result); // Output: 10

sumNumbers(4, '6'); // Throws an error


function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a + b;
  }
  
  try {
    const result = sum("1", "2");
    console.log(result);
  } catch (error) {
    console.log("An error occurred: ", error.message);
  }
  
  let user = {username: "sam", password: "123abc"};
  function login(username, password){
    //check credentials
  }

  function login(username, password, user) {
    if (user.username !== username || user.password !== password) {
      throw new Error('Invalid username or password');
    } else {
      console.log('Login successful!');
    }
  }
  const userN = {
    username: 'johndoe',
    password: 'password123'
  };
  
  try {
    login('johndoe', 'password123', user);
  } catch (error) {
    console.log(error.message);
  }
  
