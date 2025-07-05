export const removeAllContacts = async () => { await writeContacts([]); };

removeAllContacts();

const { writeContacts } = require('../utils/writeContacts');

