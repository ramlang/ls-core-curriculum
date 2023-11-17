class Model {
  constructor(view) {
    this.view = view;
    this.contacts = null;
    this.tagList = [];
  }

  async getAllContacts() {
    const response =  await fetch(
      'http://localhost:3000/api/contacts', {
      method: "GET",
    })
    
    await response.json().then((json) => {
      this.contacts = json;
      this.view.displayContactList(json);
    }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
  }

  async postNewContact(data) {
    await fetch(
      `http://localhost:3000/api/contacts/`, {
      method: "POST" ,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then(() => {
      this.getAllContacts();
      this.view.displayMsg("Contact saved! :)")
    }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
  }
  
  async getContactById(id) {
    const response = await fetch(
      `http://localhost:3000/api/contacts/${id}`, {
      method: "GET",
    })

    await response.json().then((contact) => {
      contact["action"] = "Edit";
      contact["tagList"] = this.tagList;
      this.view.displayContactToEdit(contact);
    }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
  }

  async putUpdatedContact(data) {
    await fetch(
      `http://localhost:3000/api/contacts/${data.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then(() => this.getAllContacts())
      .catch(err => this.view.displayMsg(err.statusText));
  }

  async deleteContactById(id) {
    await fetch(
      `http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE", 
    }).then(() => {
      this.getAllContacts();
      this.view.displayMsg("Contact deleted! :)");
    }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
  }

  setTags(tags) {
    console.log(tags);
    this.tagList = tags;
  }

  addNewTag(tag) {
    if (!this.tagList.includes(tag)) {
      this.tagList.push(tag);
    }
  }
}

class View {
  constructor() {
    this.setupHandlebarsHelperIncludes();
    this.templateForm = Handlebars.compile($('#contact_form_template').html());
    this.templateContact = Handlebars.compile($('#contact_template').html());
    this.templateTag = Handlebars.compile($('#tag_template').html());
    this.$table = $('.contact_list');
    this.$msg = $('.message');
    this.$newBtn = $('.message button');
    this.maxColumns = 3;
  }

  displayContactToEdit(contact) {
    $('form').parent().remove();
    this.$table.hide();
    this.removeMsg();
    this.formatTagsProperty(contact);
    this.$table.before(this.templateForm(contact));
  }

  displayCancel(contacts) {
    $('form').parent().remove();
    this.$table.show();
    // this.displayContactList(contacts);
  }

  displayContactList(contacts) {
    $('form').parent().remove();
    this.$newBtn.hide();
    let row = document.createElement('tr');
    this.$table.text('');
    this.$table.append(row);
    if (contacts) {
      this.buildTable(contacts);
      this.$table.show();
    } else {
      this.displayNoContacts();
    }
  }

  displayNoContacts() {
    this.$table.hide();
    this.$msg.text("Oh no! You don't have any friends yet :(");
    this.$msg.append(this.$newBtn);
    this.$newBtn.show();
    this.$msg.show();
  }

  displayAddTag(data) {
    this.$table.hide();
    $('form').parent().remove();
    this.removeMsg();
    this.$msg.after(this.templateTag(data));
  }

  displayUpdatedTagList(data) {
    $('form').parent().remove();
    $table.append(this.templateTag(data));
  }

  formatTagsProperty(contact) {
    if (typeof contact.tags === "string") {
      contact.tags = contact.tags.split(',');
    }
  }

  displayMsg(text) {
    this.$newBtn.hide();
    this.$msg.text(text);
    this.$msg.show();
  }

  displayError(text) {
    this.displayMsg(`ERROR ${text}`);
    this.$msg.classList.add('error');
  }

  displaySuccess(text) {
    this.displayMsg(`SUCCESS ${text}`);
    this.$msg.classList.add('success');
  }
  
  removeMsg() {
    this.$msg.attr("class", "message");
    this.$msg.text('');
    this.$msg.hide();
    this.$newBtn.hide();
  }

  buildTable(contacts) {   

    contacts.forEach((contact) => {
      // console.log("build table", contact);
      this.formatTagsProperty(contact);
      this.addToTable(contact);
    });
  }

  addToTable(contact) {
    let $cols = $('table tr:last-child td').length;
    $cols < this.maxColumns ? this.addCell(contact) : this.addRow(contact);
  }

  addCell(contact) {
    const $row = $('table tr:last-child');
    const elem = this.templateContact(contact);
    $row.append(elem);
  }

  createRow(contact) {
    const tr = document.createElement('tr');
    const elem = this.templateContact(contact);
    return $(tr).append(elem);
  }

  addRow(contact) {
    const row = this.createRow(contact);
    this.$table.append(row);
  }

  setupHandlebarsHelperIncludes() {
    Handlebars.registerHelper('includes', function(collection, item) {
      if (collection) return collection.includes(item);
      return false;
    });
  }
}

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model(this.view);
    this.load();
  }

  // ====== Load Existing Contacts  ======

  async load() {
    await this.model.getAllContacts();
    this.getTagsAppliedToContacts();
    this.setupDefaultEvents();
    if (this.model.contacts) this.setupListEvents();
  }

  // ====== Resigter Event Listeners ======

  setupDefaultEvents() {
    $('.new_contact').on('click', this.createNewContact.bind(this));
    $('.new_tag').on('click', this.createNewTag.bind(this));
    $('input#search').on('keyup', this.filterSearchByInput.bind(this));
  }

  setupListEvents() {
    $('td').on('click', this.delegateButtonPress.bind(this));
  }

  // ====== Default Event Functions ======

  emptyContact() {
    const contact = { action: "Create", tagList: this.model.tagList };
    return contact;
  }

  async createNewContact() {
    await this.view.displayContactToEdit(this.emptyContact());
    $('form').on('submit', this.saveNewContact.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  createNewTag() {
    this.view.displayAddTag({tagList: this.model.tagList});
    $('ul').on('click', this.filterSearchByTag.bind(this));
    $('form').on('submit', this.addNewTag.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  filterSearchByInput(event) {
    const input = event.target.value;
    const matches = this.model.contacts.filter((contact) => {
      const regex = new RegExp(`^${input}`, 'gi');
      return regex.test(contact.full_name);
    })
    this.view.displayContactList(matches);
    this.setupListEvents();
  }

  // ====== List Event Functions ======

  delegateButtonPress(event) {
    if (this.isTypeOfButton(event, 'edit')) {
      this.editContact.call(this, event);
    } else if (this.isTypeOfButton(event, 'delete')) {
      this.deleteContact.call(this, event);
    } else if (this.isTypeOfButton(event, 'tag')) {
      this.filterSearchByTag.call(this, event);
    }
  }

  filterSearchByTag(event) {
    const tag = event.target.textContent.slice(1).trim();
    const results = this.model.contacts.filter((contact) => {
      if (contact.tags) {
        return contact.tags.includes(tag);
      } else {
        return false;
      }
    });
    this.view.displayContactList(results);
    this.setupListEvents();
  }

  // ====== Delegate Button Event Functions ======

  isTypeOfButton(e, btn) {
    return e.target.classList.contains(btn);
  }

  async editContact(event) {
    const id = event.target.parentElement.id;
    await this.model.getContactById(id);
    $('form').on('submit', this.updateContact.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  deleteContact(event) {
    const td = event.target.parentElement;
    const name = td.firstElementChild.textContent;
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
 
    if (confirm) this.model.deleteContactById(td.id);
  }

  addNewTag(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const tag = form["tag_name"].value;
    console.log(tag);
    this.model.addNewTag(tag);
    this.createNewTag();
  }

  // ====== Edit Button Event Functions ======

  async updateContact(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = this.serialize(new FormData(form));
    console.log(data);
    await this.model.putUpdatedContact(data);
    this.setupListEvents();
  }

  serialize(data) {
    const object = {};
    let arr = [];

    for (let entry of data) {
      let [key, value] = [entry[0], entry[1]];

      if (key === "tags") {
        arr.push(value);
      } else {
        object[key] = value;
      }
    }

    object['tags'] = arr.join(',');
    return object;
  }

  // ====== Save & Cancel Event Functions ======

  async saveNewContact(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = this.serialize(new FormData(form));
    await this.model.postNewContact(data);
    this.setupListEvents();
  }
  
  cancel() {
    this.view.displayCancel(this.model.contacts);
  }

  getTagsAppliedToContacts() {
    const applied = this.model.contacts.reduce((acc, curr) => {
      if (curr.tags) {
        // const tags = curr.tags.split(',');
        this.getUniqueTags(acc, curr.tags);
      }
      return acc;
    }, []);

    this.model.setTags(applied);
  }

  getUniqueTags(collection, tags) {
    tags.forEach((tag) => {
      if (!collection.includes(tag)) collection.push(tag);
    });
  }
}

$(function() {
  let app = new Controller();
});

// ============================================================================

// class Model {
//   constructor(view) {
//     this.view = view;
//     this.contacts = null;
//     this.tagList = [];
//   }

//   async getAllContacts() {
//     const response =  await fetch(
//       'http://localhost:3000/api/contacts', {
//       method: "GET",
//     })
    
//     await response.json().then((json) => {
//       this.contacts = json;
//       this.view.displayContactList(json);
//     }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
//   }

//   async postNewContact(data) {
//     await fetch(
//       `http://localhost:3000/api/contacts/`, {
//       method: "POST" ,
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data),
//     }).then(() => {
//       this.getAllContacts();
//       this.view.displayMsg("Contact saved! :)")
//     }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
//   }
  
//   async getContactById(id) {
//     const response = await fetch(
//       `http://localhost:3000/api/contacts/${id}`, {
//       method: "GET",
//     })

//     await response.json().then((contact) => {
//       contact["action"] = "Edit";
//       contact["tagList"] = this.tagList;
//       this.view.displayContactToEdit(contact);
//     }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
//   }

//   async putUpdatedContact(data) {
//     await fetch(
//       `http://localhost:3000/api/contacts/${data.id}`, {
//       method: "PUT",
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data),
//     }).then(() => this.getAllContacts())
//       .catch(err => this.view.displayMsg(err.statusText));
//   }

//   async deleteContactById(id) {
//     await fetch(
//       `http://localhost:3000/api/contacts/${id}`, {
//       method: "DELETE", 
//     }).then(() => {
//       this.getAllContacts();
//       this.view.displayMsg("Contact deleted! :)");
//     }).catch(err => this.view.displayMsg(`Error: ${err.statusText}`));
//   }

//   setTags(tags) {
//     this.tagList = tags;
//   }

//   addNewTag(tag) {
//     if (!this.tagList.includes(tag)) {
//       this.tagList.push(tag);
//     }
//   }
// }

// class View {
//   constructor() {
//     this.setupHandlebarsHelperIncludes();
//     this.templateForm = Handlebars.compile($('#contact_form_template').html());
//     this.templateContact = Handlebars.compile($('#contact_template').html());
//     this.templateTag = Handlebars.compile($('#tag_template').html());
//     this.$table = $('.contact_list');
//     this.$msg = $('.message');
//     this.$newBtn = $('.message button');
//     this.maxColumns = 3;
//   }

//   displayContactList(contacts) {
//     this.resetPage();
//     if (contacts) {
//       this.buildTable(contacts);
//       this.$table.show();
//     } else {
//       this.displayNoContacts();
//     }
//   }

//   displayContactToEdit(contact) {
//     this.removeCurrentForm();
//     this.removeMsg();
//     this.$table.hide();
//     this.formatTagsProperty(contact);
//     this.$table.before(this.templateForm(contact));
//   }

//   displayNoContacts() {
//     this.$table.hide();
//     this.displayNoFriendsMessageAndButton();
//   }

//   displayNoFriendsMessageAndButton() {
//     this.$msg.text("Oh no! You don't have any friends yet :(");
//     this.$msg.append(this.$newBtn);
//     this.$newBtn.show();
//     this.$msg.show();
//   }

//   displayAddTag(data) {
//     this.removeCurrentForm();
//     this.removeMsg();
//     this.$table.hide();
//     this.$msg.after(this.templateTag(data));
//   }

//   displayUpdatedTagList(data) {
//     this.removeCurrentForm();
//     $table.append(this.templateTag(data));
//   }

//   displayCancel() {
//     this.removeCurrentForm();
//     this.$table.show();
//   }

//   displayMsg(text) {
//     this.$newBtn.hide();
//     this.$msg.text(text);
//     this.$msg.show();
//   }

//   displayError(text) {
//     this.displayMsg(`ERROR ${text}`);
//     this.$msg.classList.add('error');
//   }

//   displaySuccess(text) {
//     this.displayMsg(`SUCCESS ${text}`);
//     this.$msg.classList.add('success');
//   } 

//   resetPage() {
//     this.removeCurrentForm();
//     this.resetTable();
//     this.hideNoFriendsButton();
//   }
  
//   resetTable() {
//     let row = document.createElement('tr');
//     this.$table.text('');
//     this.$table.append(row);
//   }

//   removeCurrentForm() {
//     $('form').parent().remove();
//   }

//   removeMsg() {
//     this.$msg.attr("class", "message");
//     this.$msg.text('');
//     this.$msg.hide();
//     this.$newBtn.hide();
//   }

//   hideNoFriendsButton() {
//     this.$newBtn.hide();
//   }

//   buildTable(contacts) {   
//     contacts.forEach((contact) => {
//       this.formatTagsProperty(contact);
//       this.addToTable(contact);
//     });
//   }

//   addToTable(contact) {
//     let $cols = $('table tr:last-child td').length;
//     $cols < this.maxColumns ? this.addCell(contact) : this.addRow(contact);
//   }

//   addCell(contact) {
//     const $row = $('table tr:last-child');
//     const elem = this.templateContact(contact);
//     $row.append(elem);
//   }

//   createRow(contact) {
//     const tr = document.createElement('tr');
//     const elem = this.templateContact(contact);
//     return $(tr).append(elem);
//   }

//   addRow(contact) {
//     const row = this.createRow(contact);
//     this.$table.append(row);
//   }

//   formatTagsProperty(contact) {
//     if (typeof contact.tags === "string") {
//       contact.tags = contact.tags.split(',');
//     }
//   }

//   setupHandlebarsHelperIncludes() {
//     Handlebars.registerHelper('includes', function(collection, item) {
//       if (collection) return collection.includes(item);
//       return false;
//     });
//   }
// }

// class Controller {
//   constructor() {
//     this.view = new View();
//     this.model = new Model(this.view);
//     this.load();
//   }

//   // ====== Load Existing Contacts  ======

//   async load() {
//     await this.model.getAllContacts();
//     this.getTagsAppliedToContacts;
//     this.setupDefaultEvents();
//     if (this.model.contacts) this.setupListEvents();
//   }

//   // ====== Resigter Event Listeners ======

//   setupDefaultEvents() {
//     $('.new_contact').on('click', this.createNewContact.bind(this));
//     $('.new_tag').on('click', this.createNewTag.bind(this));
//     $('input#search').on('keyup', this.filterSearchByInput.bind(this));
//   }

//   setupListEvents() {
//     $('td').on('click', this.delegateButtonPress.bind(this));
//   }

//   // ====== Default Event Functions ======

//   emptyContact() {
//     const contact = { action: "Create", tagList: this.model.tagList };
//     return contact;
//   }

//   async createNewContact() {
//     await this.view.displayContactToEdit(this.emptyContact());
//     $('form').on('submit', this.saveNewContact.bind(this));
//     $('.cancel').on('click', this.cancel.bind(this));
//   }

//   createNewTag() {
//     this.view.displayAddTag({tagList: this.model.tagList});
//     $('ul').on('click', this.filterSearchByTag.bind(this));
//     $('form').on('submit', this.addNewTag.bind(this));
//     $('.cancel').on('click', this.cancel.bind(this));
//   }

//   filterSearchByInput(event) {
//     const input = event.target.value;
//     const matches = this.model.contacts.filter((contact) => {
//       const regex = new RegExp(`^${input}`, 'gi');
//       return regex.test(contact.full_name);
//     })
//     this.view.displayContactList(matches);
//     this.setupListEvents();
//   }

//   // ====== List Event Functions ======

//   delegateButtonPress(event) {
//     if (this.isTypeOfButton(event, 'edit')) {
//       this.editContact.call(this, event);
//     } else if (this.isTypeOfButton(event, 'delete')) {
//       this.deleteContact.call(this, event);
//     } else if (this.isTypeOfButton(event, 'tag')) {
//       this.filterSearchByTag.call(this, event);
//     }
//   }

//   filterSearchByTag(event) {
//     const tag = event.target.textContent.slice(1).trim();
//     const results = this.model.contacts.filter((contact) => {
//       if (contact.tags) {
//         return contact.tags.includes(tag);
//       } else {
//         return false;
//       }
//     });
//     this.view.displayContactList(results);
//     this.setupListEvents();
//   }

//   // ====== Delegate Button Event Functions ======

//   isTypeOfButton(e, btn) {
//     return e.target.classList.contains(btn);
//   }

//   async editContact(event) {
//     const id = event.target.parentElement.id;
//     await this.model.getContactById(id);
//     $('form').on('submit', this.updateContact.bind(this));
//     $('.cancel').on('click', this.cancel.bind(this));
//   }

//   deleteContact(event) {
//     const td = event.target.parentElement;
//     const name = td.firstElementChild.textContent;
//     const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
 
//     if (confirm) this.model.deleteContactById(td.id);
//   }

//   addNewTag(event) {
//     event.preventDefault();
//     const form = document.querySelector('form');
//     const tag = form["tag_name"].value;
//     console.log(tag);
//     this.model.addNewTag(tag);
//     this.createNewTag();
//     this.setupListEvents();
//   }

//   // ====== Edit Button Event Functions ======

//   async updateContact(event) {
//     event.preventDefault();
//     const form = document.querySelector('form');
//     const data = this.serialize(new FormData(form));
//     console.log(data);
//     await this.model.putUpdatedContact(data);
//     this.setupListEvents();
//   }

//   serialize(data) {
//     const object = {};
//     let arr = [];

//     for (let entry of data) {
//       let [key, value] = [entry[0], entry[1]];

//       if (key === "tags") {
//         arr.push(value);
//       } else {
//         object[key] = value;
//       }
//     }

//     object['tags'] = arr.join(',');
//     return object;
//   }

//   // ====== Save & Cancel Event Functions ======

//   async saveNewContact(event) {
//     event.preventDefault();
//     const form = document.querySelector('form');
//     const data = this.serialize(new FormData(form));
//     await this.model.postNewContact(data);
//     this.setupListEvents();
//   }
  
//   cancel() {
//     this.view.displayCancel(this.model.contacts);
//   }

//   getTagsAppliedToContacts() {
//     const applied = this.model.contacts.reduce((acc, curr) => {
//       const tags = curr.tags.split(',');
//       this.getUniqueTags(acc, tags);
//       return acc;
//     }, []);

//     this.model.setTags = applied;
//   }

//   getUniqueTags(collection, tags) {
//     tags.forEach((tag) => {
//       if (!collection.includes(tag)) collection.push(tag);
//     });
//   }
// }

// $(function() {
//   let app = new Controller();
// });