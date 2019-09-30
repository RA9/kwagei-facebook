const tableContainer = document.querySelector("#table-container");
//const trContainer = document.querySelector("tr");

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
        { id: 1, firstname: "Nathan", lastname: "Siafa", contact: "0776728619" },
        { id: 2, firstname: "Emmanuel", lastname: "Jaygbay", contact: "0776728619" },
        { id: 3, firstname: "Rudeen", lastname: "Zarwolo", contact: "0776728619" },
        { id: 4, firstname: "Carlos", lastname: "Nah", contact: "0776728619" },
        { id: 5, firstname: "Kpetermani", lastname: "Siakor", contact: "0776728619" },
        { id: 6, firstname: "Blessing", lastname: "Boslah", contact: "0776728619" }
    ],
    "displayNames": function () {
        tableContainer.innerHTML = "";
        this.contactNames.forEach((contact, i) => {
            tableContainer.innerHTML += `
                <tr id='${i}'>
                <td>${i+1}</td>
                <td>${contact.firstname}</td>
                <td>${contact.lastname}</td>
                <td>${contact.contact}</td>
                <td>
                <button type="button" data-id='${i}' id="edit-contact">Edit</button>
                <button type="button" data-num='${i}' id="delete-contact">Delete</button>
                </td>
                </tr>
                
            `;
        });
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
        this.contactNames.push({ id: this.contactNames.length + 1, firstname: first.trim(), lastname: last.trim(), contact: contact.trim() });
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
    },
    "editContactHandler": function () {
        let editPosition = document.querySelector("#edit-position");
        let editFirstName = document.querySelector("#edit-firstname");
        let editLastName = document.querySelector("#edit-lastname");
        let editContact = document.querySelector("#editContact");
        editContainer.classList.add("hide");
        editContainer.classList.remove("show");
        console.log(editPosition.value);
        let numPosition = parseInt(editPosition.value)-1;
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
    "deleteButtonHandler": function () {
        editContainer.classList.remove("show");
        editContainer.classList.add("hide");
        addContainer.classList.add("hide");
        addContainer.classList.remove("show");
    },
    "deleteContactName": function (position) {
        this.contactNames.splice(parseInt(position), 1)
        this.displayNames();
    }
}



kwageiFacebook.displayNames();
 

tableContainer.addEventListener("click", (e) => {
    const elementClick = e.target;
    if(elementClick.id === "delete-contact") {
        kwageiFacebook.deleteButtonHandler();
        console.log(elementClick.getAttribute('data-num'))
        kwageiFacebook.deleteContactName(elementClick.getAttribute('data-num'));
    }

    if(elementClick.id === "edit-contact") {
        kwageiFacebook.editButtonHandler()
        let editPosition = document.querySelector("#edit-position");
        let editFirstName = document.querySelector("#edit-firstname");
        let editLastName = document.querySelector("#edit-lastname");
        let editContact = document.querySelector("#editContact");
        const dataId = elementClick.getAttribute('data-id')

        let editContactInformation = kwageiFacebook.contactNames[parseInt(dataId)];
        console.log(editContactInformation)
        editPosition.value = editContactInformation.id;
        editFirstName.value = editContactInformation.firstname;
        editLastName.value = editContactInformation.lastname;
        editContact.value = editContactInformation.contact;
    }
    
});