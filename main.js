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



// Arrays of name objects
let contactNames = [
    { firstname: "Nathan", lastname: "Siafa", contact: "0776728619" },
    { firstname: "Emmanuel", lastname: "Jaygbay", contact: "0776728619" },
    { firstname: "Rudeen", lastname: "Zarwolo", contact: "0776728619" },
    { firstname: "Carlos", lastname: "Nah", contact: "0776728619" },
    { firstname: "Kpetermani", lastname: "Siakor", contact: "0776728619" }
]

const displayNames = () => {
    let countNo = 0;
    tableContainer.innerHTML = ' ';
    for (let i = 0; i < contactNames.length; i++) {
        const element = contactNames[i];
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

}

const deleteContactName = (position) => {
    contactNames.splice(parseInt(position, 10) - 1, 1)
    console.log(contactNames, parseInt(position, 10))
}

const addContactNames = (first, last, contact) => {
    contactNames.push({ firstname: first.trim(), lastname: last.trim(), contact: contact.trim() });
}

const editContactName = (pos, first, last, con) => {
    for (let i = 0; i < contactNames.length; i++) {
        //console.log(parseInt(numPosition, 10) === i, i)
        if (parseInt(pos, 10) - 1 === i) {
            
            contactNames[i].firstname = first;
            contactNames[i].lastname = last;
            contactNames[i].contact = con;


        }
    }

}


// Add functionalities
addButton.addEventListener("click", function () {
    addContainer.style.display = "block";
    editContainer.style.display = "none";
    deleteContainer.style.display = "none";
})

addName.addEventListener("click", function () {
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const contact = document.querySelector("#contact");
    addContactNames(firstname.value, lastname.value, contact.value);
    addContainer.style.display = "none";
    console.log(contactNames);
    displayNames();
    firstname.value = null;
    lastname.value = null;
    contact.value = null;

});


// Edit functionalities
editButton.addEventListener("click", function () {
    editContainer.style.display = "block";
    addContainer.style.display = "none";
    deleteContainer.style.display = "none";
})

editName.addEventListener("click", function () {
    let editPosition = document.querySelector("#edit-position");
    let editFirstName = document.querySelector("#edit-firstname");
    let editLastName = document.querySelector("#edit-lastname");
    let editContact = document.querySelector("#editContact");
    //addContactNames(firstname.value, lastname.value, contact.value);
    editContainer.style.display = "none";
    console.log(editContact.value);
    let numPosition = editPosition.value;
    if (editFirstName.value === "") {
        editFirstName.value = contactNames[numPosition-1].firstname;
    } 
    if (editLastName.value === "") {
        editLastName.value = contactNames[numPosition-1].lastname;
    } 
    if (editContact.value === "") {
        editContact.value = contactNames[numPosition-1].contact;
        console.log(editContact.value)
    }
    console.log(numPosition)
    editContactName(numPosition, editFirstName.value, editLastName.value, editContact.value);
    console.log(contactNames)
    displayNames();
    editPosition.value = null;
    editFirstName.value = null;
    editLastName.value = null;
    editContact.value = null;

});

// Delete functionality
deleteButton.addEventListener("click", function () {
    deleteContainer.style.display = "block";
    addContainer.style.display = "none";
    editContainer.style.display = "none";
});

deleteName.addEventListener("click", function () {
    const deletePosition = document.querySelector("#delete-position");
    deleteContactName(deletePosition.value);
    deleteContainer.style.display = "none";
    displayNames();
    deletePosition.value = "";
})






displayNames();


