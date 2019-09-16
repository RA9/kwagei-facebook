const tableContainer = document.querySelector("#add-row");

// Add elements
const addButton = document.querySelector("#add-contact");
const addContainer = document.querySelector("#add");
const addName = document.querySelector("#add-name");

// Edit elements
const editButton = document.querySelector("#edit-contact");
const editContainer = document.querySelector("#edit");
const editName = document.querySelector("#edit-name");

//Delete elements
const deleteContainer = document.querySelector("#delete");
const deleteButton = document.querySelector("#delete-contact");
const deleteName = document.querySelector("#delete-name");


const kwageiFacebook = {
    "contactNames": [
        { firstname: "Nathan", lastname: "Siafa", contact: "0776728619" },
        { firstname: "Emmanuel", lastname: "Jaygbay", contact: "0776728619" },
        { firstname: "Rudeen", lastname: "Zarwolo", contact: "0776728619" },
        { firstname: "Carlos", lastname: "Nah", contact: "0776728619" },
        { firstname: "Kpetermani", lastname: "Siakor", contact: "0776728619" }
    ],
    "displayNames": function () {
        let countNo = 0;
        tableContainer.innerHTML = ' ';
        for (let i = 0; i < this.contactNames.length; i++) {
            const element = this.contactNames[i];
            countNo += 1
            tableContainer.innerHTML += `
            <tr>
                <td>${countNo}</td>
                <td>${element.firstname}</td>
                <td> ${element.lastname} </td>
                <td> ${element.contact} </td>
            </tr>
            `;
        };
    },
    "addButtonHandler": function () {
        addContainer.classList.remove("hide");
        addContainer.classList.add("show");
        editContainer.classList.add("hide");
        editContainer.classList.remove("show");
        deleteContainer.classList.add("hide");
        deleteContainer.classList.remove("show");
    },
    "addContactNames": function (first, last, contact) {
        this.contactNames.push({ firstname: first.trim(), lastname: last.trim(), contact: contact.trim() });
    },
    "addContactHandler": function () {
        const firstname = document.querySelector("#firstname");
        const lastname = document.querySelector("#lastname");
        const contact = document.querySelector("#contact");
        if (firstname.value !== "" && lastname.value !== "" && contact.value !== "") {
            this.addContactNames(firstname.value, lastname.value, contact.value);
            this.displayNames();
            addContainer.classList.remove("show");
            addContainer.classList.add("hide");
            firstname.value = null;
            lastname.value = null;
            contact.value = null;
        } else {
            addContainer.classList.remove("show");
            addContainer.classList.add("hide");
            firstname.value = null;
            lastname.value = null;
            contact.value = null;
        }
        console.log(this.contactNames);

    },
    "editContactName": function (pos, first, last, con) {
        let i = Number(pos);
        this.contactNames[i].firstname = first;
        this.contactNames[i].lastname = last;
        this.contactNames[i].contact = con;
    },
    "editButtonHandler": function () {
        editContainer.classList.remove("hide");
        editContainer.classList.add("show");
        addContainer.classList.add("hide");
        addContainer.classList.remove("show");
        deleteContainer.classList.add("hide");
        deleteContainer.classList.remove("show");
    },
    "editContactHandler": function () {
        let editPosition = document.querySelector("#edit-position");
        let editFirstName = document.querySelector("#edit-firstname");
        let editLastName = document.querySelector("#edit-lastname");
        let editContact = document.querySelector("#editContact");
        editContainer.classList.add("hide");
        editContainer.classList.remove("show");
        console.log(editContact.value);
        let numPosition = editPosition.value - 1;
        if (editFirstName.value === "") {
            editFirstName.value = this.contactNames[numPosition].firstname;
        }
        if (editLastName.value === "") {
            editLastName.value = this.contactNames[numPosition].lastname;
        }
        if (editContact.value === "") {
            editContact.value = this.contactNames[numPosition].contact;
            console.log(editContact.value)
        }
        console.log(numPosition)
        this.editContactName(numPosition, editFirstName.value, editLastName.value, editContact.value);
        console.log(this.contactNames)
        this.displayNames();
        editPosition.value = null;
        editFirstName.value = null;
        editLastName.value = null;
        editContact.value = null;
    },
    "deleteButtonHandler": function() {
        editContainer.classList.remove("show");
        editContainer.classList.add("hide");
        addContainer.classList.add("hide");
        addContainer.classList.remove("show");
        deleteContainer.classList.add("show");
        deleteContainer.classList.remove("hide");
    },
    "deleteContactName": function (position) {
        this.contactNames.splice(parseInt(position, 10) - 1, 1)

    },
    "deleteContactHandler": function() {
        const deletePosition = document.querySelector("#delete-position");
        this.deleteContactName(deletePosition.value);
        deleteContainer.classList.add("hide");
        deleteContainer.classList.remove("show");
        this.displayNames();
        deletePosition.value = "";
    }
}



kwageiFacebook.displayNames();


