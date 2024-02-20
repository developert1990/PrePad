# Project set up

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

# Features

1. Main page

- Display list of all contacts.
- Redirect to the "Edit page".
- Delete a contact (Open Modal).
- Pagination is available.
- If you delete the last entry on the current page, you will be redirected to the previous page. If it is the first page, a message saying "No data..." will appear.

2. Edit page

- Can edit "First Name" and "Last Name" (the email field is disabled).
- Validate each field.
- After successful editing, you will be redirected to the "Main Page" after 3 seconds.

3. Create page

- Can create a new contact.
- Validate each field.
- It checks if the email is unique once you click the "Submit" button.
- After successful creation, you will be redirected to the "Main Page" after 3 seconds.

# Description

1.  Since no RESTful API calls are made, the loading feature was not used.
2.  Since the backend and database have not been built currently, the values are stored in local storage to maintain data.
3.  Currently, only code to test business logic has been written. If necessary in the future, we can test each component, and end-to-end testing is also possible using cypress.
4.  As this app grows, there might be a significant increase in components. so I use Redux-toolkit which helps us to manage states.
