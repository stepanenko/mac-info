
function newUser(name, score) {
  const newUser = Object.create(userMethodsStore);

  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userMethodsStore = {
  increment: function() {
    this.score++;
  }
}

const jack = newUser('Jack', 8);
jack.increment();

console.log(jack); // { name: 'Jack', score: 9 }
