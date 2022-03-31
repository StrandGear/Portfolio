let userInteracted = false;
var firstStep = document.querySelector('#firstFootPrint')
function interactionEvent(){
  userInteracted = true;
  document.getElementsByClassName("startBtn")[0].style.display = "none";
  playStep(firstStep.children[0]);
  showStep(firstStep.children[1]);
}

function gitHover(element){
  element.setAttribute('src', './img/links/GitHub-logo_hover.png')
}
function gitUnhover(element){
  element.setAttribute('src', './img/GitHub-logo.png')
}
function artstHover(element){
  element.setAttribute('src', './img/links/artstation_hover.png')
}
function artstUnhover(element){
  element.setAttribute('src', './img/artstation.png')
}
function itchHover(element){
  element.setAttribute('src', './img/links/itch-io-logo_hover.png')
}
function itchUnhover(element){
  element.setAttribute('src', './img/itch-io-logo.png')
}

// scroll to top 
mybutton = document.getElementById("toTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// slideshow
var slideIndex = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "mySlides2");
showSlides(slideIndex, "mySlides3");
showSlides(slideIndex, "mySlides4");
showSlides(slideIndex, "mySlides5");
showSlides(slideIndex, "mySlides6");
showSlides(slideIndex, "mySlides7");

// Next/previous controls
function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n, className) {
  showSlides(slideIndex = n, className);
}

function showSlides(n, slidesClassName) {
  var i;
  var slides = document.getElementsByClassName(slidesClassName);
  var dots = document.getElementsByClassName(slidesClassName + "_dot");
  //console.log(dots);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//by https://codepen.io/Tbgse
// function([string1, string2],target id,[color1,color2])    
consoleText(['Year 2017'], 'text',['black']);
consoleText(['Year 2021'], 'text2',['black']);
consoleText(['Year 2021'], 'text3',['black']);
consoleText(['2020-2021'], 'text4',['black']); //,'DimGrey'

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 800)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 800)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


function playStep(elem){
  elem.play();
  //setTimeout(function(){ elem.src = ""}, 1200)
}

function showStep(elem){
  elem.classList.remove('outView');
  elem.classList.add('inView');
  setTimeout(function(){
    elem.classList.add('outView')
    elem.classList.remove('inView')
  }, 1700)
}

//Intersection observer 

let contentBlocks = document.querySelectorAll('.contentToAppear');
var footPrints = Array.prototype.slice.call(document.querySelectorAll('.footprintBlock'))
let othersBtn = document.querySelectorAll('.otherButton')[0];
footPrints.push(firstStep)

let options = {
  rootMargin: '-40%',
  threshold: 0.0
}

let observer = new IntersectionObserver(showContaienr, options);
let observer2 = new IntersectionObserver(showFootprint, options);

function showContaienr(entries) {
  
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting && userInteracted){
      entry.target.classList.add('inView');
    }

  })
}

function showFootprint(entries) {
  entries.forEach (entry => {
    
    if (entry.isIntersecting && userInteracted){
      playStep(entry.target.children[0])
      showStep(entry.target.children[1])
    }
  })
}

contentBlocks.forEach(element => {
    observer.observe(element)
});

observer.observe(othersBtn);
console.log(othersBtn)

footPrints.forEach(element =>{
    observer2.observe(element)
})



// other content

otherContentBlocks = document.querySelectorAll('.otherContent');

function showOther(){
  otherContentBlocks.forEach( block => {
    block.classList.add('inView');
  })
}
