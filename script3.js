class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
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
let myBook = new AddressBook();
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
console.log(myBook);

function print(theBook) {
  //   for (let contact of theBook.contacts.for) {
  //     console.log(contact);
  //   }
  theBook.contacts.forEach(contact => {
    console.log(contact);
  });
}

print(myBook);
