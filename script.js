const contacts = {
  pratik: "9876898798",
  krushna: "9821345678",
  abhi: "9727345678",
  siddharth: "7620605323",
};


function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    contacts[name] = phone;
    renderContacts();
    clearFields();
  } else {
    alert("Please fill in both fields.");
  }
}


function renderContacts() {
  const phonebookList = document.getElementById("phonebook-list");
  phonebookList.innerHTML = "";

  for (let name in contacts) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${name} - ${contacts[name]}</span>
      <button class="delete" onclick="removeContact('${name}')">Delete</button> `;
    phonebookList.appendChild(li);
  }
}


function removeContact(name) {
  delete contacts[name];
  renderContacts();
}


function searchContact() {
  const searchTerm = document.getElementById("search").value.toLowerCase();

  const filteredContacts = Object.keys(contacts).filter((contactName) =>
    contactName.toLowerCase().includes(searchTerm)
  );

  renderFilteredContacts(filteredContacts);
}


function renderFilteredContacts(filteredContacts) {
  const phonebookList = document.getElementById("phonebook-list");
  phonebookList.innerHTML = "";

  filteredContacts.forEach((contactName) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${contactName} - ${contacts[contactName]}</span>
      <button class="delete" onclick="removeContact('${contactName}')">Delete</button> `;
    phonebookList.appendChild(li);
  });
}


function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}


renderContacts();
