var tablinks=document.getElementsByClassName("tablinks");
var tabcontents=document.getElementsByClassName("tabcontents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbx8L7KDuoeiFZNVG0yQfkOGSLb-ZMxjYQbEIYSBOMvA76HpQ3QANRaFwCAhD5dKTAUWbg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
