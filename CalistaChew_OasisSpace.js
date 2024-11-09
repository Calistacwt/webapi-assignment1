module.exports = {
  guest: [],
  suiteType: [
    {
      suiteId: 1,
      suiteType: "Junior Suite",
      vacancy: 30,
      suiteNumber: Array.from({ length: 30 }, (_, i) => i + 1), // Suite number from 1 to 30
    },
    {
      suiteId: 2,
      suiteType: "Executive Suite",
      vacancy: 20,
      suiteNumber: Array.from({ length: 20 }, (_, i) => i + 31), // Suite number from 31 to 50
    },
    {
      suiteId: 3,
      suiteType: "Presidential Suite",
      vacancy: 10,
      suiteNumber: Array.from({ length: 10 }, (_, i) => i + 51), // Suite number from 51 to 60
    },
    {
      suiteId: 4,
      suiteType: "Family Suite",
      vacancy: 25,
      suiteNumber: Array.from({ length: 25 }, (_, i) => i + 61), // Suite number from 61 to 85
    },
  ],

  // Register Guest
  registerGuest(name, contact, checkInDate, checkOutDate) {
    // Validate checkIn date and checkOut date
    if (checkOutDate < checkInDate) {
      console.error(
        `[ERROR]: Check-Out date cannot be earlier than the Check-In date for guest: ${name}`
      );
      return;
    }

    const newGuest = {
      guestId: this.guest.length + 1,
      name,
      contact,
      checkInDate,
      checkOutDate,
      status: "Pending",
    };
    this.guest.push(newGuest);
    console.log(
      `Guest added successfully:\n Guest ID: ${newGuest.guestId}\n Guest Name: ${newGuest.name}\n Contact Number: ${newGuest.contact}\n Check-In Date: ${newGuest.checkInDate}\n Check-Out Date: ${newGuest.checkOutDate}\n Status: ${newGuest.status}\n `
    );
  },

  // Update Guest Details
  updateGuestDetails(guestId, name, contact, checkInDate, checkOutDate) {
    // Find guest by ID from the guest list
    const guest = this.guest.find((g) => g.guestId === guestId);

    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found`);
      return;
    }

    // Validate checkIn date and checkOut date
    if (checkOutDate < checkInDate) {
      console.error(
        `[ERROR]: Check-Out date cannot be earlier than the Check-In date for guest: ${name}`
      );
      return;
    }
    // Update guest details
    guest.name = name;
    guest.contact = contact;
    guest.checkInDate = checkInDate;
    guest.checkOutDate = checkOutDate;

    console.log(
      `Guest Details updated successfully:\n Guest ID: ${guest.guestId}\n Guest Name: ${guest.name}\n Contact Number: ${guest.contact}\n Check-In Date: ${guest.checkInDate}\n Check-Out Date: ${guest.checkOutDate}\n Status: ${guest.status}\n `
    );
  },

  // Retrieve Guest Details by ID
  retrieveGuestDetails(guestId) {
    // Find guest by ID from the guest list
    const guest = this.guest.find((g) => g.guestId === guestId);
    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found`);
      return;
    }

    // Assign suiteType and suiteNumber if they exist on the guest else is null
    const suiteType = guest.suiteType ? guest.suiteType : null;
    const suiteNumber = guest.suiteNumber ? guest.suiteNumber : null;

    console.log(
      `Retrieve Guest Information: \n Guest ID: ${guest.guestId}\n Guest Name: ${guest.name}\n Suite Type: ${suiteType}\n Suite Number: ${suiteNumber}\n Status: ${guest.status}\n`
    );
  },

  // Check-In Guest and Assign Suite Number
  checkInGuest(guestId, suiteId) {
    // Find guest by ID from the guest list
    const guest = this.guest.find((g) => g.guestId === guestId);
    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found`);
      return;
    }

    // Find the suite by ID from the suite type list
    const suite = this.suiteType.find((s) => s.suiteId === suiteId);
    if (!suite) {
      console.error(`[ERROR]: Suite with ID ${suiteId} does not exist.`);
      return;
    }

    // Check if the suite are occupied
    if (suite.vacancy <= 0) {
      console.error(
        `[ERROR]: No available suite in ${suite.suiteType} type. Unable to proceed with check-in for the guest with ID ${guestId}. `
      );
      return;
    }

    // Check-In guest if the status is 'Pending'
    if (guest && guest.status === "Pending") {
      const suiteNumber = suite.suiteNumber.shift(); // Assign available suite to guest

      // Update guest and suite details
      guest.status = "Check-In";
      guest.suiteType = suite.suiteType;
      guest.suiteNumber = suiteNumber;
      suite.vacancy -= 1; // Decrease the suite vacancy count

      console.log(
        `Check-In successfully!\n Guest ID: ${guest.guestId}\n Guest Name: ${guest.name}\n Suite Type: ${guest.suiteType}\n Suite Number: ${suiteNumber}\n Status: ${guest.status}\n`
      );
    } else {
      console.error(
        `[ERROR]: Guest with ID ${guestId} has already check-in to another suite. `
      );
    }
  },

  // Check-Out Guest
  checkOutGuest(guestId) {
    // Find guest by ID from the guest list
    const guest = this.guest.find((g) => g.guestId === guestId);
    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found`);
      return;
    }

    // Check if the guest has Check-Out
    if (guest.status !== "Check-In") {
      console.error(
        `[ERROR]: Guest with ID ${guestId} is not checked in or has already check-out.`
      );
      return;
    }

    // Find the suite the guest is currently in
    const suite = this.suiteType.find((s) => s.suiteType === guest.suiteType);
    if (!suite) {
      console.error(`[ERROR]: Suite of type ${guest.suiteType} not found`);
      return;
    }

    // Increase the suite vacancy count
    suite.vacancy += 1;

    // Update guest and suite details
    guest.status = "Check-Out";
    guest.suiteType = null;
    guest.suiteNumber = null;

    console.log(
      `Check-Out successfully!\n Guest ID: ${guest.guestId}\n Guest Name: ${guest.name}\n Suite Type: ${guest.suiteType}\n Room Number: ${guest.suiteNumber}\n Status: ${guest.status}\n`
    );
  },

  // List All Guests
  listAllGuests() {
    if (this.guest.length === 0) {
      console.info("[No guests have been registered yet.");
      return;
    }
    console.log("List of All Guests:");
    this.guest.forEach((guest) => {
      console.log(
        `Guest ID: ${guest.guestId}\nGuest Name: ${guest.name}\nContact: ${
          guest.contact
        }\nCheck-In Date: ${guest.checkInDate}\nCheck-Out Date: ${
          guest.checkOutDate
        }\nStatus: ${guest.status}\nSuite Type: ${
          guest.suiteType || "null"
        }\nSuite Number: ${guest.suiteNumber || "null"}\n`
      );
    });
  },

  // Check Room Availability by suiteID
  checkSuiteAvailability(suiteId) {
    // Find the suite by ID from the suite type list
    const suite = this.suiteType.find((s) => s.suiteId === suiteId);
    if (!suite) {
      console.error(`[ERROR]: Suite with ID ${suiteId} not found.`);
      return;
    }
    console.log(`Suite Type: ${suite.suiteType}\nVacancy: ${suite.vacancy}\n`);
  },

  // Search Guests by Name
  searchGuestsByName(name) {
    // Filters the list of guests to find the name
    const guests = this.guest.filter((g) =>
      g.name.toLowerCase().includes(name.toLowerCase())
    );

    if (guests.length === 0) {
      console.log(`No guests found with the name ${name}`);
      return;
    }

    console.log(`Guests found with the name ${name}:`);
    guests.forEach((guest) => {
      console.log(
        `Guest ID: ${guest.guestId}\nGuest Name: ${guest.name}\nContact: ${guest.contact}\nStatus: ${guest.status}\n`
      );
    });
  },
};
