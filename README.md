### Assignment 1

# Oasis Space Management Module

The **Oasis Space Management Module** is a Node.js based-solution designed to streamline hotel operations, providing a comprehensive range of functions, including guest registrations, check-ins, check-outs and more. It offers hotel administrators a seamless way to manage room availability, track guest details, and optimize daily operations, ensuring a smooth and optimized experience for both staff and guests.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Usage](#usage)
5. [References](#references)

## Features

**1. Guest Registration**
- `registerGuest(name, contact, checkInDate, checkOutDate)`: <br/>
Registers a new guest by storing their name, contact number, check-in and check-out dates. It also checks that the check-out date is later than the check-in date before adding the guest to the system.

**2. Update Guest Details**
- `updateGuestDetails(guestId, name, contact, checkInDate, checkOutDate)`: <br/>
Allows updates to an existing guest's details, such as their name, contact number, and stay dates. It also ensures the stay date is valid.

**3. Retrieve Guest Details** 
- `retrieveGuestDetails(guestId)`: <br/>
Retrieves detailed information about a guest, including their Check In/Out status and suite details.

**4. Check-In Functionality**
- `checkInGuest(guestId, suiteId)`:<br/>
Checks in a guest to a suite, assigning them a suite if available. It ensures the suite type has vacancy and that the guest is in a "Pending" status before proceeding.

**5. Check-Out Functionality**
- `checkOutGuest(guestId)`:<br/>
Facilitates the guest check-out process by updating the status and releasing the assigned suite for new guests. Ensuring the suite's vacancy count is adjusted, making the suite available for future bookings.

**6. List All Guests**
- `listAllGuests()`:<br/>
Returns a list of all registered guests, including their details such as name, contact, check-in/check-out dates and suite details.

**7. Check Suite Availability**
- `checkSuiteAvailability(suiteId)`:<br/>
Check the current vacancy within a specified suite type that returns the number of vacant rooms in that category.

**8. Search Guest By Name**
- `searchGuestsByName(name)`:<br/>
Allows you to search for registred guests by their name to help quickly locate guests in the system without requiring their full registration details



## Installation

No dependencies required to use this module.

## Setup

**Step 1: Clone the repository**<br/>
To start using the module, clone the repository by running the following command in the terminal:

```
git clone https://github.com/Calistacwt/webapi-assignment1.git
```

**Step 2: Navigate to the Project Directory**<br/>
After cloning the repository, navigate to the project directory by executing:

```
 cd webapi-assignment1
```

**Step 3: Create the app.js File**<br/>

1. In the root of the project directory, create an `app.js` file.
2. Open the `app.js` and import the module into the project

```
const oasisSpace = require('./CalistaChew_OasisSpace');
```

**Step 4: Run the Application**<br/>
To run the application, use `node` or `nodemon` for automatic reloading during development.

- To run with Node.js:
  ```
    node app.js
  ```
- Alternatively, install and use `nodemon` for automatic reloading:
  ```
    npm install -g nodemon
    nodemon app.js
  ```

## Usage

#### **1. Register Guest**<br/>
Register a guest calling the `registerGuest` method:

```
 oasisSpace.registerGuest("Guest 1", "+6585222673", "2024-11-07", "2024-11-09");
```
**Example Output:**
```
Guest added successfully:
 Guest ID: 1
 Guest Name: Guest 1
 Contact Number: +6585222673
 Check-In Date: 2024-11-07
 Check-Out Date: 2024-11-09
 Status: Pending
```

**2. Update Guest Details**<br/>
Update an exisiting guest's details using the `updateGuestDetails` method:

```
oasisSpace.updateGuestDetails(1, "Guest 1 Update", "+6597869141", "2024-11-07", "2024-11-09");
```
**Example Output:**
```
Guest Details updated successfully:
 Guest ID: 1
 Guest Name: Guest 1 Update
 Contact Number: +6597869141
 Check-In Date: 2024-11-07
 Check-Out Date: 2024-11-09
 Status: Pending
```

**3. Retrieve Guest Details**<br/>
To view the details of a guest, use the `retrieveGuestDetails` method:

```
oasisSpace.retrieveGuestDetails(1);
```
**Example Output:**
```
Retrieve Guest Information: 
 Guest ID: 1
 Guest Name: Guest 1
 Suite Type: Junior Suite
 Suite Number: 1
 Status: Check-In
```

**4. Check-In Guests**<br/>
To check-in a guest to a suite, use the `checkInGuest` method:

```
oasisSpace.checkInGuest(1,1);
```
**Example Output:**
```
Check-In successfully!
 Guest ID: 1
 Guest Name: Guest 1
 Suite Type: Junior Suite
 Suite Number: 1
 Status: Check-In
```

**5. Check-Out Guests**<br/>
When a guest is ready to check-out, use the `checkOutGuest` method:

```
oasisSpace.checkOutGuest(1);
```
**Example Output:**
```
Check-Out successfully!
 Guest ID: 1
 Guest Name: Guest 1
 Suite Type: null
 Room Number: null
 Status: Check-Out
```

**6. List All Guests**<br/>
Retrieves and display a list of all registered guests, use the`listAllGuests` method:

```
oasisSpace.listAllGuests();
```
**Example Output:**
```
List of All Guests:
Guest ID: 1
Guest Name: Guest 1
Contact: +6597869141
Check-In Date: 2024-11-07
Check-Out Date: 2024-11-09
Status: Check-In
Suite Type: Junior Suite
Suite Number: 1

Guest ID: 2
Guest Name: Guest 2
Contact: +6596195010
Check-In Date: 2024-12-07
Check-Out Date: 2024-12-09
Status: Check-Out
Suite Type: null
Suite Number: null

```

**7. Check Suite Availability**<br/>
To check the current availability of suites within a specified suite type, use the `checkSuiteAvailability` method:

```
oasisSpace.checkSuiteAvailability(1);
```
**Example Output:**
```
Suite Type: Junior Suite
Vacancy: 29
```


**8. Search Guest By Name**<br/>
To search for registered guests by their name, use the `searchGuestsByName(name)` method:

```
oasisSpace.searchGuestsByName("Guest 1");
```
**Example Output:**
```
Guests found with the name Guest 1:
Guest ID: 1
Guest Name: Guest 1
Contact: +6585222673
Status: Pending
```




## References

**1. Best Practices for Writing a GitHub README File**  <br/>
A guide to creating clear and effective README files for GitHub Projects. <br/>
[Best Practices for Writing a GitHub README File](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

**2. GitHub Markdown Syntax**  <br/>
Learn the basic syntax for writing and formatting content on GitHub. <br/>
[Basic Writing and Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

