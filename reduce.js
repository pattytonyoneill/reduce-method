  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
// acc is used to stand for accumulator 
// curr is used to stand for current value
let sum = nums.reduce((acc, curr) => acc + curr, 0);
// good practice to put initial value in this case it is 0.
console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
// total experience for the team
// Always specify the initial value or when using objects in particular get a wrong answer
let totalExperience = teamMembers.reduce((acc, curr)=> acc + curr.yrsExperience , 0);
console.log(totalExperience)

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(experienceByProfession);

