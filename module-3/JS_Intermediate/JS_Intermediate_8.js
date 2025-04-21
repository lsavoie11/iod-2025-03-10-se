const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

//Exercise A
const phoneBookDEF = new Map([
  ["Derek", "0466112233"],
  ["Ella", "0477223344"],
  ["Fiona", "0488334455"],
]);

//Exercise B
phoneBookABC.set("Caroline", "0455000000");

//Exercise C
function printPhoneBook(contacts) {
  contacts.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//Exercise D
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

//Exercise E
console.log([...phoneBook.keys()]);
