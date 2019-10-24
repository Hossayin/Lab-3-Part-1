"use strict";

class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
    // let contact = new Contact(name, email, phone, relation);
    // this.contacts.push(contact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

let myAddressBook = new AddressBook();
//this does this
myAddressBook.add("Ai", "ali@gmial.com", "737373", "my parnter");
myAddressBook.add("mom", "amom@gmial.com", "737373", "my mom");
console.log(myAddressBook);

// let contact1 = new Contact(
//   "James Brown",
//   "ItsJamesBrownBitch@gmail.com",
//   "555-555-5555",
//   "Friend"
// );
// const
