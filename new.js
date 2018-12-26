
function newUser(name, score) {
  this.name = name;
  this.score = score;

}

newUser.prototype.increment = function() {
  this.score++;
}

const bill = new newUser('Bill', 3);
bill.increment();

console.log(bill);
