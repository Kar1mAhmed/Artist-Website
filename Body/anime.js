
//the loading event
var loader =document.querySelector(".spin");
window.addEventListener('load',function() {
      loader.style.display= 'none'
});



var click =document.querySelector(".click")


function closemenu() {
      click.style.top="-100vh";
      document.body.style.overflowY = 'visible';

}


function openmenu() {
      click.style.top="0";
      document.body.style.overflow = 'hidden';
}



var counter=1;
setInterval(function(){
      document.getElementById('r'+ counter).checked =true;
      counter++;
      if(counter > 6) {
            counter =1;
      }
},5000);



function myFunction() {
      /* Get the text field */
      var copyText = document.getElementById("myInput");
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
}