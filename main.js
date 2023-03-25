const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
   selectElement('header').classList.toggle('active');
});

/* ACCORDION */
var acc =document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function (){
      this.classList.toggle("opened");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
         panel.style.maxHeight = null;
      } else{
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}


// const navigationHeight = document.querySelector('header').offsetHeight;

// document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");
