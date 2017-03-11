const expect = require('expect');

const {Users} = require('./users');

describe('Users',  function() {

  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node course'
    },{
      id: 2,
      name: 'Jen',
      room: 'React course'
    },{
      id: 3,
      name: 'Julie',
      room: 'Node course'
    }];
  });

  it('should add new user', function() {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andy',
      room: 'Office'
    };
    var resUsers = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', function(){
    users.removeUser(2);

    expect(users.users[1].name).toNotBe('Jen');

  });

  it('should not remove user', function(){
    users.removeUser(5);

    expect(users.users.length).toBe(2);

  });

  it('should find user', function(){
    let user = users.getUser(2);
    expect(user.name).toBe('Jen');
  });

  it('should not find user', function() {
    let user = users.getUser(90);

    expect(user).toNotExist();
  });

  it('should return names for node course', function() {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', function() {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  });

});
