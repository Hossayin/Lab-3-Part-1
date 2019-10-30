class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.deleteAt(index, 1);
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
function print(newBook) {
  newBook.contacts.forEach(contact => {
    console.log(contact);
  });
}
let myBook = new AddressBook();
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
myBook.add("Mark", "marker@sharpie.com", 1231231234, "righthandman");
print(myBook);

function display() {
  document.querySelector("#contactCardArea").innerHTML = "";
  myBook.contacts.forEach((contact, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("contactCard"); //contactbox is a style class for the card itsself
    newEntry.innerHTML = `
    <p>Name: ${contact.name}</p>
    <p>Email:${contact.email}</p>
    <p>Phone:${contact.phone}</p>
    <p>Relation:${contact.relation}</p>
    <i class= "fa fa-trash" data-index-number="${index}" aria-hidden="true"></i>
    `;
    document.querySelector("#contactCardArea").appendChild(newEntry);
  });
}
display(); //does this work? if so move on

const form = document.querySelector("form");

form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  myBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}

document
  .querySelector("#contactCardArea")
  .addEventListener("click", deleteContact);
function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute(data - index - number);
    console.log(index);
    myBook.deleteAt(index);
    display();
  }
}
