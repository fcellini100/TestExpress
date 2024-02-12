class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  validate() {
    if (!this.name || !this.email) {
      throw new Error('User data is incomplete.');
    }
  }
}

module.exports = User;
