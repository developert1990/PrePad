import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      email: "aaa@gmail.com",
      firstName: "sangmean",
      lastName: "hong",
    },
    { id: uuidv4(), email: "bbb@gmail.com", firstName: "hyeyoung", lastName: "lee" },
    { id: uuidv4(), email: "ccc@gmail.com", firstName: "sia", lastName: "hong" },
    { id: uuidv4(), email: "ddd@gmail.com", firstName: "lia", lastName: "hong" },
    {
      id: uuidv4(),
      email: "eee@gmail.com",
      firstName: "younghee",
      lastName: "jang",
    },
    {
      id: uuidv4(),
      email: "111@gmail.com",
      firstName: "sangmean",
      lastName: "hong",
    },
    { id: uuidv4(), email: "222@gmail.com", firstName: "hyeyoung", lastName: "lee" },
    { id: uuidv4(), email: "333@gmail.com", firstName: "sia", lastName: "hong" },
    { id: uuidv4(), email: "444@gmail.com", firstName: "lia", lastName: "hong" },
    {
      id: uuidv4(),
      email: "555@gmail.com",
      firstName: "younghee",
      lastName: "jang",
    },
    {
      id: uuidv4(),
      email: "666@gmail.com",
      firstName: "sangmean",
      lastName: "hong",
    },
    {
      id: uuidv4(),
      email: "777@gmail.com",
      firstName: "hyeyoung",
      lastName: "lee",
    },
    { id: uuidv4(), email: "888@gmail.com", firstName: "sia", lastName: "hong" },
    { id: uuidv4(), email: "999@gmail.com", firstName: "lia", lastName: "hong" },
    {
      id: uuidv4(),
      email: "0000@gmail.com",
      firstName: "younghee",
      lastName: "jang",
    },
  ],
  selectedContact: {},
};
const contactSlice = createSlice({
  name: "contact",
  initialState: () => {
    let state;
    const initialStateFromLS = localStorage.getItem("initialState");
    if (!initialStateFromLS) {
      localStorage.setItem("initialState", JSON.stringify(initialState));
      state = initialState;
    } else {
      state = JSON.parse(initialStateFromLS);
    }
    return state;
  },
  reducers: {
    getOne: (state, action) => {
      const contact = state.contacts.find((contact) => contact.id === action.payload);
      if (contact) {
        state.selectedContact = contact;
      }
    },
    add: (state, action) => {
      const parsedContactInfo = parseContactsFromLS();
      const contactInfo = { id: uuidv4(), ...action.payload };
      parsedContactInfo.contacts.unshift(contactInfo);
      localStorage.setItem("initialState", JSON.stringify(parsedContactInfo));

      state.contacts.unshift(contactInfo);
    },
    edit: (state, action) => {
      const parsedContactInfo = parseContactsFromLS();
      const objWithIdIndex = parsedContactInfo.contacts.findIndex((obj) => obj.id === action.payload.id);
      parsedContactInfo.contacts[objWithIdIndex] = action.payload;
      localStorage.setItem("initialState", JSON.stringify(parsedContactInfo));

      state.contacts[objWithIdIndex] = action.payload;
    },
    remove: (state, action) => {
      const parsedContactInfo = parseContactsFromLS();
      const objWithIdIndex = parsedContactInfo.contacts.findIndex((obj) => obj.id === action.payload);
      parsedContactInfo.contacts.splice(objWithIdIndex, 1);
      localStorage.setItem("initialState", JSON.stringify(parsedContactInfo));
      state.contacts.splice(objWithIdIndex, 1);
    },
  },
});

const parseContactsFromLS = () => {
  const contactsFromLS = localStorage.getItem("initialState");
  const parsedContactInfo = JSON.parse(contactsFromLS);

  return parsedContactInfo;
};

export default contactSlice;
export const { getOne, getAll, add, edit, remove } = contactSlice.actions;
