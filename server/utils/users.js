
// addUSer(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    let index = undefined;
    let user;
    for (let i in this.users){
      if(this.users[i].id === id){
        index = i;
      }
    }
    if (index !== undefined) {
      user = this.users[index];
      this.users.splice(index, 1);
    }
    return user;
  }

  getUser(id) {
    let user = this.users.filter(user => user.id === id);
    return user[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }

}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription(){
//     return `${this.name} is ${this.age} years(s) old.`
//   }
// }
