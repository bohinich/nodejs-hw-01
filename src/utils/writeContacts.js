import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {};

const fs = require('fs/promises');
const { PATH_DB } = require('../constants/contacts');

async function writeContacts(data) {
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = { writeContacts };
