import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/addContact");
export const removeContact = createAction("contacts/removeContact");
export const filterContact = createAction("contacts/filterContact");

// export const addContact = (nextContact) => ({
//   type: "contacts/addContact",
//   payload: nextContact,
// });

// export const removeContact = (id) => ({
//   type: "contacts/removeContact",
//   payload: id,
// });

// export const filterContact = (e) => ({
//   type: "contacts/filterContact",
//   payload: e,
// });
