
function userCreator(name, score) {
  const newUser = {};

  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }

  return newUser;
}

const john = userCreator('John', 5);
john.increment();

console.log(john);
