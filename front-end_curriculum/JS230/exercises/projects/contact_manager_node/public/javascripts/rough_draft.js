/*
Contact Manager PEDAC

=================================== MODEL =====================================

PROPERTIES OF MODEL
-------------------
this.contacts = last queried data structure (stored for filtering purposes)
this.tags = [] 

FUNCTIONS OF MODEL
------------------
> GET ALL CONTACTS FROM API STORE
this.all() {
  INVOKE fetch method with two arguments
    - 'http://localhost:3000/api/contacts'
    - { method: "GET" }
  THEN 
    - view.displayAll()
}

> GET CONTACT BY ID FROM API STORE
this.contact(id) {
  INVOKE fetch method with two arguments
    - `http://localhost:3000/api/contacts/${id}`
    - { method: "GET" }
  THEN 
    - view.displayContact()
}

> SAVE CONTACT BY ID FROM API STORE
this.new(id) {
  - displayNewContact()
  INVOKE fetch method with two arguments
    - `http://localhost:3000/api/contacts/`
    - { method: "POST" }
  THEN 
    confirm?
}

> UPDATE CONTACT BY ID FROM API STORE
this.update(id) {
  - view.displayEdit()
  INVOKE fetch method with two arguments
    - `http://localhost:3000/api/contacts/${id}`
    - { method: "PUT" }
  THEN 
    - view.displayAll()
}

> DELETE CONTACT BY ID FROM API STORE
this.delete(id) {
  INVOKE fetch method with two arguments
    - `http://localhost:3000/api/contacts/${id}`
    - { method: "DELETE" }
  THEN 
    - view.displayAll()
}

> ADD TAG TO TAGS ARRAY
this.addTag(tag) {
  If tag does not exists within tags already...
    - Make sure it's valid input/not js
    - tags.push(tag)
}

=================================== VIEW =====================================

PROPERTIES OF VIEW
-------------------
this.contactFormTemplate value is template fn
this.contactTemplate value is template fn
this.tagTemplate value is template fn

FUNCTIONS OF VIEW
------------------
GET TEMPLATE:
 - #contact_form_template (args: none) {
    Use jQuery to get HTML of #contact_form_template
    Use Handlebars to compile template
    return function template
  }
 - #contact_template (args: none) {
    Use jQuery to get HTML of #contact_template
    Use Handlebars to compile template
    return function template
  }

- #tag_template (args: none) {
    Use jQuery to get HTML of #tag_template
    Use Handlebars to compile template
    return function template
  }

RENDER TEMPLATE:
- renderCreateContact(data) {
  const ACTION arg is "Create" (because creating new contacts)
  Use this.contactFormTemplate(data)
  Pass in custom object as data:
    - Mostly empty strings or array value(s)
      (keys: action, id, name, email, phone, tag, tags)
    - Use ACTION arg for value of action key
    - Use this.tags for tags key
  Get .contact_list and InsertAdjacentHTML "beforebegin" rendered template
}

- renderContacts(data=this.contacts) {
  GET last row as 'table tr:last-child'
  
  Iterate through the data for each contact
    - IF last row children length < 3 {
     last row InsertAdjacentHTML "beforeend" rendered template(contact)
    - ELSE last row children >= 3 {
      CREATE new tr element
      tr element InsertAdjacentHTML "afterbegin" rendered template(contact)
      last row InsertAdjacentElement "afterend", tr element
    }
}

- renderEditContact(data) {
  const ACTION arg is "Edit" (because editing existing contacts)
  DATA is retrieved data from API
  Use this.contactFormTemplate(data)
  Pass in custom object as data:
    - keys: action, id, name, email, phone, tag, tags)
    - Use ACTION arg for value of action key
    - Use this.tags for tags key
  Get .contact_list and InsertAdjacentHTML "beforebegin" rendered template
}

- renderCreateTag(data) {
  const ACTION arg is "Create"
  DATA is this.tags
  Use this.tagTemplate(data)
  Get .main and InsertAdjacentHTML "beforeend" rendered template
}

- hideContactList() {
  GET table.contact_list
  ADD attribute "hidden"
}

- hideMessage() {
  GET div.messafe
  ADD attribute "hidden"
}

- reset() {  (What is being reset? Contact list or message or both?)
  this.hideMessage()
  GET table.contact_list
  SET text content
  ADD empty TR element as only child
}

- displayMessage() {
  GET div.message REMOVE hidden
}

- hideMessage() {
  GET div.message ADD hidden
}

=============================== CONTROLLER =====================================
PROPERTIES OF CONTROLLER
-------------------------
this.model = model object
this.view = view object

FUNCTIONS OF CONTROLLER
-----------------------
setupEventListeners() {
  Add ON "click"" handler for 'btn.submit.new', pass handleCreateContact

}

handleCreateContact() {
  this.view.reset();
  this.model.new();
  this.model.all();
}

handleEditContact() {
  this.view.reset();
  this.model.edit();
  this.model.all();
}

handleDeleteContact() {
  this.model.delete();
  this.model.all() || this.view.displayMessage()
}

handleCreateTag() {
  this.view.reset();
  this.model.addTag();
}

handleCancel() {
  this.view.reset();
  this.view.all();
}

handleSearch() {
  GET target textContent value 
  ITERATE through contacts determine if characters match contact name
  this.view.renderContacts(filteredData)
}


Fetch Notes
============

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties. 

fetch(
  '/my-blog-post',
  { method: "GET" }             // fetch initially accepts two args
).then((response) => {          // chained then() method to handle Promise
  // do something with response
});

this.all() {
  INVOKE fetch method with two arguments
    - 'http://localhost:3000/api/contacts'
    - { method: "GET" }
  THEN 
    - view.displayAll()
}



HELPER FUNCITONS
================


0. Wait for the DOM to load
  0a. Use jQuery to execute on DOM loaded event
  0b. Wrapper function with function expression not arrow

1. Enable CREATE TAG functionality
  1a. Add ON "click"" handler for 'btn.new.tag' element
    1. Define handler for event with "e" argument
    2. GET div.message & table.contact_list and ADD attribute "hidden"
    3. Render renderCreateTag("Create");
    ==== LEAVE OUT FOR NOW ====
  1b. GET all "ul" elements and add ON "click" handler
    1. Remove current renderCreateTag being displayed
    2. Render renderEditTag("Edit", data)
    3. Set variable to value of current tag
    =====  =====   =====  =====
  1c. Add ON "click"" handler for '.btn.submit' element
    0. Push new tag data to this.tags
    1. Remove current renderCreateTag being displayed
    1. Re-render renderCreateTag("Create", data)
  1e. Add ON "click" for btn.cancel when exiting out
    1. REMOVE tag form
    2. GET div.message and .contact_list REMOVE hidden

2. Enable CREATE CONTACT functionality
  2a. Add ON "click"" handler for 'btn.submit.new' collection
    1. Define handler for event with "e" argument
    2. GET div.message and ADD attribute "hidden"
    3. Render renderCreateContacts("Create"); 
  2b. Add ON "click"" handler for '.btn.submit' element
    0. Validate input? (automatic HTML validation?)
    1. Create new XHR request (using fetch?)
    2. Open XHR request ('post', 'http://localhost:3000/api/contacts/')
    3. Set request header 'Content-Type' to 'application/json'
    4. Set responseType to 'json'
    5. Create new FormData object
      > Remove action and id IF creating new
      > Serialize data (convert to JSON?)
      > Send request with serialized data as body
  2c. Add ON "load" for XHR when form submits (with fetch how do you do this?)
    1. Ceate new XHR request (using fetch?)
    2. Open XHR request ('get', 'http://localhost:3000/api/contacts')
    3. Send XHR request
  2d. Add ON "load" for XHR when all contacts retrieved
  2e. Add ON "click" for btn.cancel when exiting out
    1. Remove contact form
    2. GET div.message and REMOVE attribute "hidden"
    3. Render renderContacts(data)

** NOTES
- could potentially deletgate and add one event listener to buttons for edit and delete so it's not on every contact
- Then check to see what the class is or text content is to determine what to do next.

3. Enable EDIT CONTACT functionality
  3a. Add ON "click" handler for 'btn.edit' collection **see note
    1. Define handler for event with "e" argument
    2. GET div.message and ADD attribute "hidden"
      REMOVE current template displayed
    3. Render renderEditContacts("Edit"); 
  3b. Add ON "click"" handler for '.btn.submit' element
    0. Validate input? (automatic HTML validation?)
    1. Create new XHR request (using fetch?)
    2. Open XHR request ('put', `http://localhost:3000/api/contacts/${id}`)
    3. Set request header 'Content-Type' to 'application/json'
    4. Set responseType to 'json'
    5. Create new FormData object
      > Remove action
      > Serialize data (convert to JSON?)
      > Send request with serialized data as body
  3c. Add ON "load" for XHR when form submits (with fetch how do you do this?)
    1. Ceate new XHR request (using fetch?)
    2. Open XHR request ('get', 'http://localhost:3000/api/contacts')
    3. Send XHR request
  3d. Add ON "load" for XHR when all contacts retrieved
  3e. Add ON "click" for btn.cancel when exiting out
    1. Remove contact form
    3. Render renderContacts(data)

4. Enable DELETE CONTACT functionality
  4a. Add ON "click"" handler for 'btn.delete' collection **see note
    1. Define handler for event with "e" argument
    2. Create alert to ask if the user is sure  
  4b. If input is yes...
    1. Create new XHR request (using fetch?)
    2. Open XHR request ('delete', `http://localhost:3000/api/contacts/${id}`)
    3. Set request header 'Content-Type' to 'application/json'
    4. Set responseType to 'json'
      a. Add ON "load" for XHR when form submits (with fetch how do you do this?)
        0. Display success message
        1. Ceate new XHR request (using fetch?)
        2. Open XHR request ('get', 'http://localhost:3000/api/contacts')
        3. Send XHR request
      b. Add ON "load" for XHR when all contacts retrieved
        1. Remove contact form
        3. Render renderContacts(data)
        3. Render renderCreateContacts("Create"); 
  4c. Else if input is no...
    1. Close alert button and do nothing


5.  Enable SEARCH functionality
  5a. Add ON "keyup"" handler for '.search_box input'
    1. Define handler for event with "e" argument
    2. REMOVE currently displayed contacts
    3. Get key that is pressed or value of the element being targeted
    4. Take this.contacts and filter to see if name matches input
  5b. If there is match...
    1. Render only those contacts that match
  5c. If there is NOT a match
    1. Display message that there are no matches.
  5d. If backspace and there are no characters present...
    1. Display all



<!-- 
  details {
    action: "Edit" or "Create",
    name: name or empty string,
    email: email or empty string,
    phone: phone or empty string,
    tag: selected tag
    tags: ["", "", ...] Array of strings
  }

Handlebars.registerHelper('tagMatch', function (value1, value2 ) {
  return value1 === value2;
});

  ** Use DOM to select the correct value???

  {#each main}}  
  {{#each sub}} 
    <p>{{ ../dataOfMain }}</p>
    <p>{{ subData }}</p>
  {{/each}}
{{/each}}

append contact template using tr and td appropriately

  details {
    action: "Edit" or "Create"
    tags: [all tags];
    tag: empty string or current tag selected
  }

-->
*/

class Model {
  constructor(view) {
    this.view = view;
    this.contacts = null;
    this.allTags = ['family', 'friends', 'coworkers'];
  }

  allContacts() {
    return fetch(
      'http://localhost:3000/api/contacts', {
      method: "GET",
    }).then(response => response.json())
      .then(data => {
        this.contacts = data || null;
        this.view.displayContactList(this.contacts)
    }).catch(e => this.view.displayError(e.statusText));
  }

  newContact() {
    this.view.displayContact({
      action: "Create",
      name: '',
      email: '',
      phone: '',
      tags: '',
      allTags: this.allTags,
    });
  }

  saveContact(data) {
    fetch(
      `http://localhost:3000/api/contacts/`, {
      method: "POST" ,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then(() => {
      this.view.displaySuccess("Contact saved! :)");
      this.allContacts();
    }).catch((e) => {
      this.view.displayError(e.statusText);
    }); 
  }

  editContact(id) {
    fetch(
      `http://localhost:3000/api/contacts/${id}`, {
       method: "GET",
    }).then((response) => response.json())
      .then((data) => {
        data["action"] = "Edit";
        data["allTags"] = this.allTags;
        this.view.displayContact(data);
    }).catch((e) => {
        this.view.displayError(e.statusText);
    });
  }
  
  updateContact(data) {
    fetch(
      `http://localhost:3000/api/contacts/${data.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((data) => this.view.displayContactList(data))
      .catch((e) => {
      this.view.displayError(e.statusText)
    }); 
  }

  delete(id) {
    fetch(
      `http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE", 
    }).then(() => {
      this.view.displaySuccess("Contact deleted! :)");
      this.view.displayContactList(this.contacts);
    }).catch((e) => {
      this.view.displayError(e.statusText)
    })
  }
  
  addTags(array) {
    array.forEach(tag => {
      this.allTags.push(tag);
    })
  }
}

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model(this.view);
    this.setupHelpers();
    this.setupDefaultEventListeners();
    this.loadContacts();
    // this.setupContactListEventListeners();
  }

  async loadContacts() {
    await this.model.allContacts()
      .then(() => $('td').on('click', this.handleContactButtons.bind(this)))
      .then(() => $('span').on('click', this.handleSearchByTag.bind(this)))
      .then(() => this.model.addTags(this.extractTags()))
      .catch(() => this.view.displayEmptyList());
  }

  // async loadContacts() {
  //   await this.model.allContacts()
  //     .then(() => this.model.addTags(this.extractTags()))
  //     .then(() => this.setupContactListEventListeners.call(this))
  //     .catch(() => this.view.displayEmptyList());
  // }

  extractTags() {
    return this.model.contacts.reduce((arr, {tags}) => {
      tags.split(',').forEach((tag) => {
        if (!arr.includes(tag)) arr.push(tag);
      })

      return arr;
    }, []);
  }

  setupHelpers() {
    Handlebars.registerHelper('tagMatch', function(value1, value2 ) {
      return value2.includes(value1); // should be a string
    });
  }

  setupDefaultEventListeners() {
    $('.new_contact').on('click', this.handleNewContact.bind(this));
    $('.new_tag').on('click', this.handleCreateTag);
    $('input#search').on('keyup', this.handleSearchByInput.bind(this));
  }

  setupContactListEventListeners() {
    console.log("td", $('td'));
    console.log("span", $('span'));

    $('td').on('click', this.handleContactButtons.bind(this));
    $('span').on('click', this.handleSearchByTag.bind(this));
  }

  handleNewContact(e) {
    e.preventDefault();
    this.view.reset();
    this.model.newContact();
    $('.save').on('submit', this.handleSaveContact.bind(this));
    $('.cancel').on('click', this.handleCancel.bind(this));
  }

  formDataToJSON(data) {
    let obj = {};
    for (let p of data) {
      obj[p[0]] = p[1];
    }
    return obj;
  }

  handleSaveContact(e) {
    e.preventDefault();
    let data = new FormData(document.querySelector('form'));
    data.set('tags', 'Wusty Wab');
    this.model.saveContact(this.formDataToJSON(data));
    $('td').on('click', this.handleContactButtons.bind(this));
  }

  handleContactButtons(e) {
    if (e.target.classList.contains('edit')) {
      this.handleEditContact(e);
    } else if (e.target.classList.contains('delete')) {
      this.handleDeleteContact(e);
    }
  }

  handleEditContact(e) {
    let td = e.target.parentElement;
    this.view.reset();
    this.model.editContact(td.id);
    $('.cancel').on('click', this.handleCancel.bind(this));
  }

  handleDeleteContact(e) {
    let td = e.target.parentElement;
    let contact = td.firstElementChild.value;
    let confirm = confirm(`Are you sure you want to delete ${contact}?`);

    if (confirm) {
      this.model.delete(td.id);
    };
  }

  handleCreateTag() {
    this.view.reset();
    this.model.addTag();
    $('.cancel').on('click', this.handleCancel.bind(this));
  }

  handleCancel() {
    this.view.reset();
    this.view.displayContactList(this.model.contacts);
    $('td').on('click', this.handleContactButtons.bind(this));
  }

  handleSearchByInput(event) {
    let text = event.target.value;
    let results = this.model.contacts.filter((contact) => {
      let regex = new RegExp(text);
      return regex.test(contact.full_name);
    })
    this.view.displayContactList(results);
  }

  handleSearchByTag(e) {
    let tag = e.target;
    let results = this.model.contacts.filter((contact) => {
      console.log(contact.tags);
      return contact.tags.includes(tag);
    });
    this.view.displayContactList(results);
  }
}

class View {
  constructor() {
    this.formTemplate = Handlebars.compile($('#contact_form_template').html());
    this.contactTemplate = Handlebars.compile($('#contact_template').html());
    this.tagTemplate = Handlebars.compile($('#tag_template').html());
    this.table = $('.contact_list');
    this.message = $('.message');
    this.maxColumnNum = 3;
  }

  displayContact(data) {
    $('.contact_list').before(this.formTemplate(data));
  }

  displayError(msg) {
    this.message.text(`ERROR: ${msg}`);
    this.message.show();
  }

  displaySuccess(msg) {
    this.message.text(`SUCCESSFUL: ${msg}`);
    this.message.show();
  }

  displayContactList(data) {
    this.reset();
    data ? this.createTable(data) : this.displayEmptyList();
  }

  createTable(data) {
    let $lastRow = $('table tr:last-child');
    
    data.forEach((contact) => {
      if ($lastRow.children().length < this.maxColumnNum) {
        contact.tags = contact.tags.split(',');
        $lastRow.append(this.contactTemplate(contact));
      } else {
        $('table').append(this.appendToNewTableRow(contact));
        $lastRow = $('table tr:last-child');
      }
    });
  }

  appendToNewTableRow(contact) {
    let tr = document.createElement('tr');
    return $(tr).append(this.contactTemplate(contact));
  }

  displayTags(data) {
    $('main').append(this.tagTemplate(data));
  }

  displayEmptyList() {
    this.message.show();
    $('.message button').show();
  }

  reset() {
    this.clearMessage();
    this.clearTable();
    this.table.show();
  }
  
  clearMessage() {
    this.message.hide();
    $('.message button').hide();
  }
  
  clearTable() {
    let row = document.createElement('tr');
    this.table.text('');
    this.table.append(row);
  }
}

$(function() {
  let app = new Controller();
});

/*
Tag feature
-----------

When the data is retrieved get the tags as a string with commas
For the string of commas, parse the string turn into array
Should be able to split on commas to make it into an array
Save the tags into storage

When editing a contact
mutate the value at the `tags` key to an array
separate by contacts

When saving a contact mutate value 



*/