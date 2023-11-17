
document.addEventListener('DOMContentLoaded', function() {
  var inventory;

  (function() {
    inventory = {
      lastId: 0,
      collection: [],
      setDate: function() {
        var date = new Date();
        document.querySelector("#order_date").textContent = date.toUTCString();
      },
      add: function() {
        this.lastId++;
        var item = {
          id: this.lastId,
          name: "",
          stock_number: "",
          quantity: 1
        };
        this.collection.push(item);

        return item;
      },
      remove: function(idx) {
        this.collection = this.collection.filter(function(item) {
          return item.id !== idx;
        });
      },
      get: function(id) {
        var found_item;
        this.collection.forEach(function(item) {
          if (item.id === id) {
            found_item = item;
            return false;
          }
        });
        return found_item;
      },
      update: function(item) {
        var id = this.findID(item);
        var collectionItem = this.get(parseInt(id, 10));

        let inputs = item.parentNode.querySelectorAll('input');
        collectionItem.name = inputs[1].value;
        collectionItem.stock_number = inputs[2].value;
        collectionItem.quantity = inputs[3].value;
      },
      newItem: function(e) {
        e.preventDefault();
        var item = this.add();
        var inventory = document.querySelector("#inventory");
        var inventoryItem = document.querySelector("#inventory_item");
        var handlebarsTemplate = Handlebars.compile(inventoryItem.innerHTML);
        var tr = document.createElement('tr');

        inventory.appendChild(tr).innerHTML = handlebarsTemplate(item).trim();
      },
      findParent: function(e) {
        return e.target.parentNode;
      },
      findID: function(item) {
        let tr = item.parentNode || item;
        let id = tr.querySelector("td").firstElementChild.value;
        return id;
      },
      deleteItem: function(e) {
        e.preventDefault();
        if (e.target.classList[0] === "delete") {
          var parent = e.target.closest('tr');
          parent.remove();

          this.remove(this.findID(parent));
        }
      },
      updateItem: function(e) {
        var parent = this.findParent(e);
        this.update(parent);
        console.log(this.collection);
      },
      bindEvents: function() {
        let addItem = document.querySelector("#add_item");
        let inventory = document.querySelector("#inventory");
        
        addItem.addEventListener("click", this.newItem.bind(this));
        inventory.addEventListener("click", this.deleteItem.bind(this));
        inventory.addEventListener("focusout", this.updateItem.bind(this));
      },
      init: function() {
        this.setDate();
        this.bindEvents();
      }
    };
  })();

  inventory.init()
});


