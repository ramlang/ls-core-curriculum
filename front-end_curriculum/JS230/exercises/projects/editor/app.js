class Editor {
  constructor() {
    this.textBox = document.querySelector(".text_box");
    this.buttonBold = document.querySelector(".bold");
    this.buttonUnderline = document.querySelector(".underline");
    this.buttonItalicize = document.querySelector(".italicize");
    this.buttonStrike = document.querySelector(".strikethrough");
    this.buttonLink = document.querySelector(".link");
    this.buttonUlist = document.querySelector(".ul");
    this.buttonOlist = document.querySelector(".ol");
    this.buttonAlignLeft = document.querySelector(".al_left");
    this.buttonAlignRight = document.querySelector(".al_right");
    this.buttonAlignCenter = document.querySelector(".al_center");
    this.buttonJustify= document.querySelector(".al_justify");

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.textBox.addEventListener('click', this.edit.bind(this));
    this.buttonBold.addEventListener('click', this.bold.bind(this));
    this.buttonItalicize.addEventListener(('click'), this.italicize.bind(this));
    this.buttonUnderline.addEventListener(('click'), this.underline.bind(this));
    this.buttonStrike.addEventListener(('click'), this.strikeThru.bind(this));
    this.buttonLink.addEventListener(('click'), this.createLink.bind(this));
    this.buttonUlist.addEventListener(('click'), this.unorderedList.bind(this));
    this.buttonOlist.addEventListener(('click'), this.orderedList.bind(this));
    this.buttonAlignLeft.addEventListener(('click'), this.alignLeft.bind(this));
    this.buttonAlignRight.addEventListener(('click'), this.alignRight
                                                          .bind(this));
    this.buttonAlignCenter.addEventListener(('click'), this.alignCenter
                                                           .bind(this));
    this.buttonJustify.addEventListener(('click'), this.justify.bind(this));
  }

  bold() {
    this.buttonBold.classList.toggle('pushed');
    document.execCommand('bold');
  }

  italicize() {
    this.buttonItalicize.classList.toggle('pushed');
    document.execCommand('italic');
  }

  underline() {
    this.buttonUnderline.classList.toggle('pushed');
    document.execCommand('underline');
  }

  strikeThru() {
    this.buttonStrike.classList.toggle('pushed');
    document.execCommand('strikethrough');
  }

  createLink() {
    this.buttonLink.classList.toggle('pushed');
    let url = window.prompt("Please enter a URL:");
    document.execCommand('createLink', null, url);
  }

  unorderedList() {
    this.buttonUlist.classList.toggle('pushed');
    document.execCommand('insertUnorderedList');
  }

  orderedList() {
    this.buttonOlist.classList.toggle('pushed');
    document.execCommand('insertOrderedList');
  }

  alignLeft() {
    this.buttonAlignLeft.classList.toggle('pushed');
    document.execCommand('justifyLeft');
  }

  alignRight() {
    this.buttonAlignRight.classList.toggle('pushed');
    document.execCommand('justifyRight');
  }

  alignCenter() {
    this.buttonAlignCenter.classList.toggle('pushed');
    document.execCommand('justifyCenter');
  }

  justify() {
    this.buttonJustify.classList.toggle('pushed');
    document.execCommand('justifyFull');
  }

  edit(e) {
    this.reset();
    this.pushButton(e.target)
  }

  reset() {
    let buttons = document.querySelectorAll('button');
    Array.prototype.slice.call(buttons).forEach((button) => {
      button.classList.remove('pushed');
    });
  }

  getAlignment(target) {
    switch (target.getAttribute('align')) {
      case "left":
        this.alignLeft();
        break;
      case "right":
        this.alignRight();
        break;
      case "center":
        this.alignCenter();
        break;
      case "justify":
        this.justify();
    }
  }

  pushButton(target) {
    let tag;

    while (target.parentNode && tag !== "BODY") {
      tag = target.tagName;

      switch (tag) {
        case "B":
          this.bold();
          break;
        case "I":
          this.italicize();
          break;
        case "U":
          this.underline();
          break;
        case "STRIKE":
          this.strikeThru();
          break;
        case "A":
          this.createLink();
          break;
        case "UL":
          this.unorderedList();
          break;
        case "LI":
          this.orderedList();
          break;
        default:
          this.getAlignment.call(this, target);
      }

      target = target.parentNode;
    }
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  let editor = new Editor();
});