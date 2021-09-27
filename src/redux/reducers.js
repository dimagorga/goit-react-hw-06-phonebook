import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { removeContact, filterContact, addContacts } from "./actions";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const ContactReducer = createReducer(initialState.contacts.items, {
  [addContacts]: (state, { payload }) => {
    const newContact = [...state, payload];
    return newContact;
  },
  [removeContact]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload);
  },
});

const filterContactReducer = createReducer(initialState.contacts.filter, {
  [filterContact]: (state, { payload }) => {
    return payload.target.value;
  },
});

const contactsReducer = combineReducers({
  items: ContactReducer,
  filter: filterContactReducer,
});

export default contactsReducer;
