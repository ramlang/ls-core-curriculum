const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

document.addEventListener('DOMContentLoaded', function(e){
  let div = document.getElementById("languages");
  let innerDiv = document.createElement('div');

  languages.forEach(function(lang) {
    let h2 = document.createElement('h2');
    h2.textContent = lang.name;

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.textContent = lang.description.slice(0, 120);
    p2.textContent = lang.description.slice(120);
    p2.style.display = 'none';

    let button = document.createElement('button');
    button.textContent = 'Show More';
    button.classList.add('more');

    button.addEventListener('click', function(e) {
      if (p2.style.display === "none") {
        p2.style.display = 'inline';
        button.textContent = 'Show Less';
      } else {
        p2.style.display = 'none';
        button.textContent = 'Show More';
      }
    })
    innerDiv.append(h2, p1, p2, button);
    div.append(innerDiv);
  });
});