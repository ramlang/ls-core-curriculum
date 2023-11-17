const $ = document;

class Page {
  constructor() {
  }

  renderTemplate(elementID, data) {
    let html = $.getElementById(elementID).innerHTML;
    let template = Handlebars.compile(html);
    return template(data);
  }

  insertHTMLAtLocation(location, position, html) {
    $.querySelector(location).insertAdjacentHTML(position, html);
  }

  fadeIn(element) {
    element.classList.add('active');
  }
  
  fadeOut(element) {
    element.classList.add('inactive');
    this.removeInfo();
    this.removeComments();
  }

  removeComments() {
    let node = $.querySelector("#comments > ul");
  
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
  
  removeInfo() {
    let node = $.querySelector("section > header");
  
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
  
  loadInfo(info) {
    let template = this.renderTemplate("photo_information", info); 
    this.insertHTMLAtLocation("section > header", "afterbegin", template);
  }

  loadComments(id) {
    let self = this;
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:3000/comments?photo_id=${id}`);
    xhr.send();
  
    xhr.addEventListener('load', function(e) {
      let comments = { comments: xhr.response };
      let partial = $.getElementById('photo_comment');
      Handlebars.registerPartial('photo_comment', partial.innerHTML);
  
      let template = self.renderTemplate("photo_comments", comments);
      self.insertHTMLAtLocation("#comments > ul", "beforeend", template);
    });
  }

  setupLikes(id) {
    let likes = $.querySelector(`a[data-property="likes"]`);

    likes.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("Get request 1");
      let xhrLikes = new XMLHttpRequest();
      xhrLikes.open("POST", "/photos/like");
      xhrLikes.setRequestHeader("Content-type", 'application/x-www-form-urlencoded; charset=UTF-8');
      xhrLikes.send(`photo_id=${id}`);

      xhrLikes.addEventListener('load', function() {
      console.log("Get request 2");

        let total = JSON.parse(xhrLikes.response).total;
        likes.textContent = likes.textContent.replace(/\d+/, total);
      });
    });
  }

  setupFavorites(id) {
    let favorites = $.querySelector(`a[data-property="favorites"]`);
    
    favorites.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("favs click");
      let xhrFavorite = new XMLHttpRequest();
      xhrFavorite.open("POST", "/photos/favorite");
      xhrFavorite.setRequestHeader("Content-type", 'application/x-www-form-urlencoded; charset=UTF-8');
      xhrFavorite.send(`photo_id=${id}`);

      xhrFavorite.addEventListener('load', function() {
      console.log("favs loaded");

        let total = JSON.parse(xhrFavorite.response).total;
        favorites.textContent = favorites.textContent.replace(/\d+/, total);
      });
    });
  }
}

class Slideshow {
  constructor(page, data) {
    this.length = data.length;
    this.data = data;
    this.setupSlideshow(page, data);
  }

  setupSlideshow(page, data) {
    let html = page.renderTemplate("photos", { photos: data });
    page.insertHTMLAtLocation("#slides", "beforeend", html);
  }

  findPhotoWithMatchingID(id) {
    for (let idx = 0; idx < this.data.length; idx++) {
      if (this.data[idx].id === id) {
        return this.data[idx];
      }
    }
  }

  nextId(id) {
    if (id === 3) {
      console.log(`next 3`)
      return 1;
    } else {
      console.log(`next ${id + 1}`)
      return id + 1;
    }
  }

  prevId(id) {
    if (id === 1) {
      console.log("prev 3")
      return 3;
    } else {
      console.log(`prev ${id - 1}`)
      return id - 1;
    }
  }

  removeActiveClassFromAllPhotos() {
    let elements = $.querySelectorAll('#slides > figure');
    
    Array.prototype.slice.call(elements).forEach((figure) => {
      figure.classList.remove('active');
    });
  }

  removeInactiveClassFromAllPhotos() {
    let elements = $.querySelectorAll('#slides > figure');
    
    Array.prototype.slice.call(elements).forEach((figure) => {
      figure.classList.remove('inactive');
    });
  }

  movePhotoToTop(element) {
    let slides = $.querySelector("#slides");
    element.remove();
    slides.prepend(element);
  }

  update(newData) {
    this.data = newData
  }
}

class Photo {
  constructor(data) {
    this.id = data.id;
    this.data = data;
  }
}

$.addEventListener('DOMContentLoaded', function(e) {
  let xhrPhotos = new XMLHttpRequest();
  xhrPhotos.responseType = "json";
  xhrPhotos.open("GET", "http://localhost:3000/photos");
  xhrPhotos.send();

  xhrPhotos.addEventListener('load', function(e) {
    const defaultID = 1;
    let data = xhrPhotos.response;

    let page = new Page();
    let slideshow = new Slideshow(page, data);

    let info = slideshow.findPhotoWithMatchingID(defaultID);
    let photo = new Photo(info);
    page.loadInfo(photo.data);
    page.loadComments(photo.id);
    page.setupLikes(photo.id);
    page.setupFavorites(photo.id);


    let nextArrow = $.querySelector('.next');
    let prevArrow = $.querySelector('.prev');

    nextArrow.addEventListener('click', function(e) {
      e.preventDefault();
      let xhrUpdate = new XMLHttpRequest();
      xhrUpdate.responseType = "json";
      xhrUpdate.open("GET", "http://localhost:3000/photos");
      xhrUpdate.send();

      xhrUpdate.addEventListener('load', function(e) { 
        page.fadeOut($.querySelector(`figure[data-id="${photo.id}"]`));
        
        slideshow.update(xhrUpdate.response);
        let id = slideshow.nextId(photo.id);
        let newInfo = slideshow.findPhotoWithMatchingID(id); 
        photo = new Photo(newInfo);
        let newFigure = $.querySelector(`figure[data-id="${photo.id}"]`);

        slideshow.removeActiveClassFromAllPhotos();
        slideshow.removeInactiveClassFromAllPhotos();
        slideshow.movePhotoToTop(newFigure);
        page.fadeIn(newFigure);
        page.loadInfo(photo.data);
        page.loadComments(photo.id);
        page.setupLikes(photo.id);
        page.setupFavorites(photo.id);
      });
    });

    prevArrow.addEventListener('click', function(e) {
      e.preventDefault();
      e.preventDefault();
      let xhrUpdate = new XMLHttpRequest();
      xhrUpdate.responseType = "json";
      xhrUpdate.open("GET", "http://localhost:3000/photos");
      xhrUpdate.send();

      xhrUpdate.addEventListener('load', function(e) { 
        page.fadeOut($.querySelector(`figure[data-id="${photo.id}"]`));

        let id = slideshow.prevId(photo.id);
        let newInfo = slideshow.findPhotoWithMatchingID(id); 
        photo = new Photo(newInfo);
        let newFigure = $.querySelector(`figure[data-id="${photo.id}"]`);

        slideshow.removeActiveClassFromAllPhotos();
        slideshow.removeInactiveClassFromAllPhotos();
        slideshow.movePhotoToTop(newFigure);
        page.fadeIn(newFigure);
        page.loadInfo(photo.data);
        page.loadComments(photo.id);
        page.setupLikes(photo.id);
        page.setupFavorites(photo.id);
      });
    });

    let form = $.querySelector('#comments > form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let formData = new FormData(form);
      let data = new URLSearchParams(formData);
      data.set('photo_id', photo.id)
      let serialized = data.toString();

      let xhrNewComment = new XMLHttpRequest();
      xhrNewComment.open("POST", "/comments/new");
      xhrNewComment.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhrNewComment.send(serialized);

      xhrNewComment.addEventListener("load", function(e) {
        page.removeComments();
        form.reset();
        page.loadComments(photo.id);
      });
    });
  });
});