export const getAllContacts = async () => {};

console.log(await getAllContacts());

const { readContacts } = require('../utils/readContacts');

async function getAllContacts() {
  const contacts = await readContacts();
  console.log(contacts);
}

getAllContacts();
