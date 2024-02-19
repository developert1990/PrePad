import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { usePagination } from "../hooks";
import { v4 as uuidv4 } from "uuid";

test("usePagination returns the correct data", () => {
  const contacts = [
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
  ];
  const store = configureStore({
    reducer: {
      contactObj: () => ({ contacts }),
    },
  });

  const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  const { result } = renderHook(() => usePagination(), { wrapper });

  expect(result.current.page).toBe(1);
  expect(result.current.contacts).toEqual(contacts);
  expect(result.current.pageData).toEqual(contacts.slice(0, 5));
  // Change page to 2
  act(() => {
    result.current.handlePageChange(null, 2);
  });

  expect(result.current.page).toBe(2);
  expect(result.current.pageData).toEqual(contacts.slice(5, 10));

  // Change page to 3
  act(() => {
    result.current.handlePageChange(null, 3);
  });

  expect(result.current.page).toBe(3);
  expect(result.current.pageData).toEqual(contacts.slice(10, 15));
});
