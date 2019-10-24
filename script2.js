class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Person(name, email, phone, relation));
  }
}

class Person {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

let addressBook = new AddressBook();
addressBook.add("Harry", "email", "456789", "teach");
console.log(addressBook);
