class Model {
  constructor(view) {
    this.view = view;
    this.contacts = null;
    this.tagList = ['friend', 'work'];
  }

  // async function fetchMoviesAndCategories() {
  //   const [moviesResponse, categoriesResponse] = await Promise.all([
  //     fetch('/movies'),
  //     fetch('/categories')
  //   ]);
  
  //   const movies = await moviesResponse.json();
  //   const categories = await categoriesResponse.json();
  
  //   return [movies, categories];
  // }
  
  // fetchMoviesAndCategories().then(([movies, categories]) => {
  //   movies;     // fetched movies
  //   categories; // fetched categories
  // }).catch(error => {
  //   // /movies or /categories request failed
  // });

  async getAll() {
    return await fetch(
      'http://localhost:3000/api/contacts', {
      method: "GET",
    });
    
    // return this.contacts = data;
  }

  async postContact(data) {
    return await fetch(
      `http://localhost:3000/api/contacts/`, {
      method: "POST" ,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).catch(()=> console.log("help"));
  }
  
  async getContact(id) {
    const response = await fetch(
      `http://localhost:3000/api/contacts/${id}`, {
      method: "GET",
    });

    return await response.json();
  }

  async put(data) {
    const response = await fetch(
      `http://localhost:3000/api/contacts/${data.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  async delete(id) {
    return await fetch(
      `http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE", 
    });
  }

  async all() {
    return this.getAll().then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          this.contacts = data;
          this.view.list(this.contacts);
        } else {
          this.view.empty();
        }
      }).catch(err => this.view.msg(`Error: ${err.statusText}`));
  }

  save(contact) {
    this.postContact(contact).then(() => {
      this.view.msg(`Success: Contact saved! :)`);
      this.all();
    }).catch(err => this.view.msg(`Error: ${err.statusText}`));
  }

  async edit(id) {
    return await this.getContact(id).then((contact) => {
      contact["action"] = "Edit";
      contact["tagList"] = this.tagList;
      this.view.display(contact);
    }).catch(err => this.view.msg(`Error: ${err.statusText}`));
  }

  update(id) {
    this.put(id).then(() => this.all())
      .catch(err => this.view.msg(`Error: ${err.statusText}`));
  }

  remove(id) {
    this.delete(id).then(() => {
      this.view.msg(`Success: Contact deleted! :)`);
      this.all();
    }).catch(err => this.view.msg(`Error: ${err.statusText}`));
  }
  
  add(tag) {
    if (!this.tagList.includes(tag)) {
      this.tagList.push(tag);
    }
  }
}

class View {
  constructor() {
    this.templateForm = Handlebars.compile($('#contact_form_template').html());
    this.templateContact = Handlebars.compile($('#contact_template').html());
    this.templateTag = Handlebars.compile($('#tag_template').html());
    this.setupHandlebarsHelperIncludes();
    this.$table = $('.contact_list');
    this.$msg = $('.message p');
    this.$newBtn = $('.message button');
    this.maxColumns = 3;
  }

  msg(text) {
    this.$msg.text(text);
    this.$msg.show();
  }

  reset() {
    this.clearForm();
    this.clearTable();
    this.clearMsg();
  }

  clearForm() {
    const $form = $('.contact_form');
    $form.remove();
    this.$table.show();
  }
  
  clearMsg() {
    this.$msg.hide();
    this.$newBtn.hide();
  }
  
  clearTable() {
    let row = document.createElement('tr');
    this.$table.text('');
    this.$table.append(row);
  }

  hideTable() {
    this.$table.hide();
  }

  display(contact) {
    this.hideTable();
    this.formatTags(contact);
    this.$table.before(this.templateForm(contact));
  }

  list(contacts) {
    this.reset();
    this.table(contacts);
    // contacts ? this.table(contacts) : this.empty();
  }

  empty() {
    this.msg("Oh no! You don't have any friends yet :(");
    this.$newBtn.show();
  }

  tags(list) {
    $('tag_form').remove();
    this.clearMsg();
    this.hideTable();
    $('main').append(this.templateTag(list));
  }

  formatTags(contact) {
    if (!contact.tags) return null;
    let arr = contact.tags.split(',');
    contact.tags = arr;
  }

  table(contacts) {  
    contacts.forEach((contact) => {
      this.formatTags(contact);
      this.add(contact);
    });
  }

  add(contact) {
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
    this.setupDefaultEvents();
    await this.model.all();
    if (this.model.contacts) this.setupListEvents();
  }

  // ====== Resigter Event Listeners ======

  setupDefaultEvents() {
    $('.new_contact').on('click', this.getNewContactForm.bind(this));
    $('.new_tag').on('click', this.getNewTagForm.bind(this));
    $('input#search').on('keyup', this.filterSearchByInput.bind(this));
  }

  setupListEvents() {
    $('td').on('click', this.delegateButtonPress.bind(this));
    $('span').on('click', this.filterSearchByTag.bind(this));
  }

  // ====== Default Event Functions ======

  emptyContact() {
    const contact = { action: "Create", tagList: this.model.tagList };
    return contact;
  }

  getNewContactForm(event) {
    event.preventDefault();
    this.view.display(this.emptyContact());
    $('form').on('submit', this.saveContact.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  getNewTagForm() {
    this.view.tags(this.model.tagList);
    $('form').on('submit', this.addNewTag.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  filterSearchByInput(event) {
    const input = event.target.value;
    const matches = this.model.contacts.filter((contact) => {
      const regex = new RegExp(input, 'g');
      return regex.test(contact.full_name);
    })
    this.view.list(matches);
  }

  // ====== List Event Functions ======

  delegateButtonPress(event) {
    if (this.isTypeOfButton(event, 'edit')) {
      this.editContact.call(this, event);
    } else if (this.isTypeOfButton(event, 'delete')) {
      this.deleteContact.call(this, event);
    } else if (this.isTypeOfButton(event, 'tag')) {
      this.filterSearchByTag.call(this.event);
    }
  }

  filterSearchByTag(event) {
    const tag = event.target.textContent.slice(1);
    const results = this.model.contacts.filter((contact) => {
      return contact.tags.includes(tag);
    });
    this.view.list(results);
  }

  // ====== Delegate Button Event Functions ======

  isTypeOfButton(e, btn) {
    return e.target.classList.contains(btn);
  }

  async editContact(event) {
    const id = event.target.parentElement.id;
    await this.model.edit(id);
    $('form').on('submit', this.updateContact.bind(this));
    $('.cancel').on('click', this.cancel.bind(this));
  }

  deleteContact(event) {
    const td = event.target.parentElement;
    console.log(td.firstElementChild);
    const name = td.firstElementChild.textContent;
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
 
    if (confirm) this.model.remove(td.id);
  }

  addNewTag(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const tag = form.tag_name;
    this.model.add(tag);
    this.getNewTagForm();
  }

  // ====== Edit Button Event Functions ======

  updateContact(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = this.serialize(new FormData(form));
    this.model.update(data);
    this.setupListEvents();
  }

  serialize(data) {
    const object = {};
    const str = "";

    for (let entry of data) {
      console.log(entry[1]);
      if (entry[0] === "tags") {
        str.concat(entry[1]);
      } else {
        object[entry[0]] = entry[1];
      }
    }

    object['tags'] = str;
    return object;
  }

  // ====== Save & Cancel Event Functions ======

  saveContact(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = this.serialize(new FormData(form));
    this.model.save(data);
    this.setupListEvents();
  }
  
  cancel(event) {
    console.log("cancel");
    $('.tag_form').remove();
    this.view.clearForm();
  }

  // getTagsAppliedToContacts() {
  //   return this.model.contacts.reduce((acc, curr) => {
  //     const tags = curr.tags.split(',');
  //     this.getUniqueTags(acc, tags);
  //     return acc;
  //   }, []);
  // }

  // getUniqueTags(collection, tags) {
  //   tags.forEach((tag) => {
  //     if (!collection.includes(tag)) collection.push(tag);
  //   });
  // }

  // ====== Register Handlebars Helpers ======

}

$(function() {
  let app = new Controller();
});
