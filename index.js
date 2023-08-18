// /* A. Q + A
// 1 - = (we can assign a variable with an assignment operator ex: let variableName = "something")
// 2 - = (we can change the value of the variable with the assignment operator ex: variableName = "newValue")
// 3 - = (we use the assignment operator to assign the existing variable to new variable ex: let newVariable = oldVariable)
// 4 - declare - a variable with no value, assign - assigning a value to the declare variable , define - it is the value of the variable or function or object
// 5 - pseudocoding is writing out the steps to solve the problem logically without writing the code
// 6 - We should spend around 90% thinking about solving the problem before writing code
// */

//  B. Strings
//1
let firstVariable; // we are declaring the variable
//2
firstVariable = "Hello World"; // assigning the value
//3
firstVariable = 2; // changing the value
//4
let secondVariable = firstVariable; // declaring old var and setting value to new var
//5
secondVariable = "new string"; // changing the value
//6:  firstVariable is "new string"

//7
let yourName = "JC"; // setting a variable with a value
console.log("hello, my name is ", yourName);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "kevin";

console.log(a < b);
console.log(c > d);
console.log("kevin" === "kevin");
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false);
console.log(e == "kevin");
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == "48");

// D. the Farm

let animal = "cow";
if (animal == "cow") {
  console.log("moooooo");
} else {
  console.log("hey, your not a cow");
}

// E. Driver's ED

let age = 18;
if (age >= 16) {
  console.log("here are the keys");
} else {
  console.log("sorry, your to young");
}

// II. Loops

// A. The basics

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 400; i++) {
  console.log(i);
}

for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. get even

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + "<-- is an even number");
  }
}

// C. give me five

for (let i = 0; i <= 100; i++) {
  if (i == 0) {
    continue; // skips this iteration of loop and goes on with next one
  }
  if (i % 5 == 0) {
    console.log("i found a " + i + ". High five");
  }
}

for (let i = 0; i <= 100; i++) {
  if (i == 0) {
    continue;
  }
  if (i % 5 == 0) {
    console.log("i found a " + i + ". High five");
  } else if (i % 3 == 0) {
    console.log("i found a " + i + ". Three is a crowd");
  }
}

for (let i = 0; i <= 100; i++) {
  if (i == 0) {
    continue;
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(
      "I have found a " +
        i +
        ". Three is a crowd " +
        "I found " +
        i +
        ". High five"
    );
    continue;
  }

  if (i % 5 == 0) {
    console.log("i found a " + i + ". High five");
  } else if (i % 3 == 0) {
    console.log("i found a " + i + ". Three is a crowd");
  }
}

// D. Savings account

let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(bank_account);

//Arrays & Control Flow

/* A) Talk about it
1: elements
2: no
3: grocery list
*/

// /*B Easy Does it*/
const quotes = ["I'll be there", "Maybe you're right", "I trust you"];

/*C Accessing Elements*/
const randomThings = [1, 10, "hello", true];

//1
console.log(randomThings[0]);

//2
randomThings[2] = "World";

//3
console.log(randomThings);

/*D: Change the value*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1
console.log(ourClass[2]);

//2
ourClass[ourClass.length - 1] = "Octocat";

//3
ourClass.push("Cloud City");

console.log(ourClass);

/*E: Mix it up*/

//1
const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "Jon Snow");
console.log(myArray);

//2
myArray.shift();
console.log(myArray);

//3
myArray.unshift("Bob Marley");
console.log(myArray);

//4
myArray.pop();
console.log(myArray);

//5
myArray.reverse();
//yes it does mutate the array
//mutate means to change or modify, especially in the context of data structures
//reverse() returns an reference to the array
console.log(myArray);

/* F: Biggie Smalls */
1;
let num = 10;
if (num < 100) {
  console.log("little number");
} else if (num >= 100) {
  console.log("big number");
}

/* F: Monkey in the middle */
//1
if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

/* H: Whats in your closet? */
//1
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "per scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmellow peeps",
];
const thomsCloset = [
  [
    //shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button up",
  ],
  ["grey jeans", "jeans", "PJs"], //pants
  ["wool mittens", "wool scarf", "raybans"], //accessories
];
//1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2
kristynsCloset.splice(6, 0, "Raybans");
console.log(kristynsCloset);

//3
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//4, 5, 6
console.log("Thoms Outfit:");
console.log(thomsCloset[0][0]);
let shirt = thomsCloset[0][0];
console.log(thomsCloset[1][0]);
let pants = thomsCloset[1][0];
console.log(thomsCloset[2][2]);
let accessory = thomsCloset[2][2];

//7
console.log(
  "Thom is looking fierce in a " + shirt + ", " + pants + ", " + accessory + "!"
);

//8
thomsCloset[1][2] = "Footie Pajamas";

/** IV. Functions */

// A.printGreeting;

const printGreeting = (name) => {
  return "Hello there, " + name;
};
console.log(printGreeting("Slimer"));

// B.printCool;
const printCool = (name) => {
  return name + " is cool";
};
console.log(printCool("captain JC"));

// C. calculateCube
const calculateCube = (num) => {
  return num ** 3;
};
console.log(calculateCube(5));

// D. isVowel

const isVowel = (str) => {
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    return true;
  } else {
    return false;
  }
};
console.log(isVowel("k"));

// E. getTwoLengths
const getTwoLengths = (str1, str2) => {
  const numbers = [];
  numbers.push(str1.length);
  numbers.push(str2.length);
  return numbers;
};
console.log(getTwoLengths("Luke", "Massoud"));

// F.
const getMultipleLengths = (arr) => {
  const lengthArray = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArray[i] = arr[i].length;
  }
  return lengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G.
const maxOfThree = (num1, num2, num3) => {
  const nums = [num1, num2, num3];
  let biggestNum = 0;
  nums.forEach((element) => {
    if (element > biggestNum) {
      biggestNum = element;
    }
  });
  return biggestNum;
};
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(9, 9, 9));
console.log(maxOfThree(6, 9, 9));

//H.
const printLongestWord = (arr) => {
  let greatestLength = 0;
  let biggestWord = "";
  arr.forEach((element) => {
    if (element.length > greatestLength) {
      greatestLength = element.length;
      biggestWord = element;
    }
  });
  return biggestWord;
};
console.log(printLongestWord(["JC", "Luke", "Sam", "JD", "Todd"]));

/**Objects */

//A: Make a user object

//1
const user = {
  name: "Luke",
  email: "luke@fakedomain.com",
  age: 31,
  purchased: [],
};

//B: Update the user

//1
user.email = "lukeishere@fakedomain.com";
user.age++;
console.log(user);

//C:Adding Keys and Values
user.location = "Seattle";
console.log(user);

//D: Shopaholic

//1
user.purchased.push("carbohydrates");
user.purchased.push("Peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

//E: Object Within Object

//1
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "New York City",
  purchased: [],
};
console.log(user);

//2
console.log(user.friend.name);

//3
console.log(user.friend.location);

//4
user.friend.age = 55;
console.log(user.friend);

//5
user.friend.purchased.push("The One Ring");

//6
user.friend.purchased.push("A latte");

//7
console.log(user.friend.purchased[1]);

//F: LOOPS

//1
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

//2
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

//G: Functions can operate on objects

//1
const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
};
updateUser();
console.log(user);

//2
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
};
oldAndLoud(user);
console.log(user);
