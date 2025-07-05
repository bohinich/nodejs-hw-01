export const addOneContact = async () => {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
};

addOneContact();

const { createFakeContact } = require('../utils/createFakeContact');
const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');


