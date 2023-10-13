# Lendsqr Frontend Engineer Assessment Test
The initiation of this project was accomplished utilizing React and TypeScript.

Execution Guidelines
Within the project's directory, you have the option to initiate the application by executing the following command:

Yarn start
This command activates the application in a developmental mode. You can access it within your browser at http://localhost:3000.

You can also access the live deployment hosted on Vercel here.

Utilized Libraries
React Router Dom for facilitating page navigation and data retrieval (v6.6.1).
Scss for custom styling.
React Table for creating the Dashboard Table.
React spinners for displaying loader screens.

Main Features
The interface is fully responsive.
The Dashboard table supports filtering, sorting, and pagination.
Loader screens are displayed during data retrieval.
Error pages are presented in case of any request-related errors.
Navigating the Table
To access the details of a specific user, simply click on the text within the Organization, Username, Email, or Phone Number columns for the corresponding row.
Alternatively, you can utilize the action button located in the last column to access a user's detailed information. A modal will appear, and you can navigate to the user's details page by clicking the "View Details" button.
To sort the table, click on the header of any column. You have the option to sort the table in ascending or descending order.
Utilize the search input in the header to search for information within any column in the table.
By clicking on the filter icon, you can filter the table. A modal will appear, and the table will be updated as you type or select an option. You can filter by organization, username, email, phone number, and status.
To close the modal, simply click outside of it.
Reset the table to its initial state by clicking on any filter icon.
Use the pagination buttons to navigate through the table.