// Cat Combinator

// 1. Mama Cat

const cat1 = {
  name: "Mama",
  breed: "British Shorthair",
  age: 10,
};
console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa Cat

const cat2 = {
  name: "papa",
  breed: "Persian cat",
  age: 3,
};

// 3. Combine Cats
const combineCats = (mama, papa) => {
  const cat = {
    name: cat1.name + cat2.name,
    age: 1,
    breed: cat1.breed + "-" + cat2.breed,
  };
  return cat;
};

// const cat = combineCats(cat1, cat2);
// console.log(combineCats(cat1, cat2));

// 4. Cat brain bender

console.log(
  combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
  )
);

//
// const combineCatsOne = (mama, papa) => {
//   const combinedCat = {
//     name: mama.name + papa.name,
//     age: 1,
//     breed: mama.breed + "-" + papa.breed,
//   };
//   return combinedCat;
// };

// const combinedCats = combineCatsOne(cat1, cat2);
// console.log(combinedCats);
// const catBrainBlended = combineCatsOne(
//   combineCatsOne(cat1, cat2),
//   combineCatsOne(cat1, cat2)
// );
// console.log(catBrainBlended);
