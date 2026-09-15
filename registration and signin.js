let personalinforamtion=document.getElementById("personalinforamtion");
let signindata=document.getElementById("signindata");
let regbtn=document.getElementById("regbtn");
let errorpass=document.getElementById("errorpass");
let signinbtn=document.getElementById("signinbtn");
let signinUserName=document.getElementById("signinUserName");
let signPassword=document.getElementById("signPassword");
let labelemail=document.getElementById("labelemail");
let labelpass=document.getElementById("labelpass");
let allbtn=document.getElementById("allbtn");
let h1sign=document.getElementById("h1sign");
let atleast=document.getElementById("atleast");

regbtn.addEventListener("click",function(){
    signindata.classList.remove("show");
personalinforamtion.classList.add("show");
document.title="Registration";

});


 signinbtn.addEventListener("click",function(){
signindata.classList.add("show");
personalinforamtion.classList.remove("show");

if(signinUserName.value.trim().length=="" && signPassword.value.length==""){
window.alert("please enter atleast one character");

}
if(signinUserName.value.trim().length>=1 && signPassword.value.length>=1){
errorpass.textContent="don't share this, but your username and password are correct and a code html,css and JavaScript  will contiue updating...";
errorpass.style.display="block";
signinUserName.style.display="none";
h1sign.style.display="none";
signPassword.style.display="none";
signinbtn.style.display="none";
regbtn.style.display="none";
labelemail.style.display="none";
labelpass.style.display="none";
allbtn.style.display="none";
atleast.style.display="none";
}

else{
    errorpass.textContent="your pass word is Incorrect";
}

document.title="sign In";

});
