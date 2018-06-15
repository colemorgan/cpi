//Set your APP_ID
var APP_ID = "m1028ocr";

window.intercomSettings = {
    app_id: APP_ID
  };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function")
{ic('reattach_activator');ic('update',intercomSettings);}else
{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args)
{i.q.push(args)};w.Intercom=i;function l()
{var s=d.createElement('script');s.type='text/javascript';s.async=true;
s.src='https://widget.intercom.io/widget/' + APP_ID;
var x=d.getElementsByTagName('script')
[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent)
{w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

function eventExample() {
  vid = window.Intercom('getVisitorId');
  return(vid) //check to see if code was correctly copied
}

// Convert lead to user
function convertExample(usr_id) {
  window.Intercom('update', {user_id: usr_id});
  return(true) //check to see if code was correctly copied
}

function updateUser(name, email, userId) {
  window.Intercom('update', { "name" : name, "email" : email, "user_id" : userId});
  return(true) //check to see if code was correctly copied
}


function signOutExample() {
  window.Intercom('shutdown');
  return(true) //check to see if code was correctly copied
}


// Code to show snippet code on toggle
function toggle(element) {
    document.getElementById(element).style.display = (document.getElementById(element).style.display == "none") ? "" : "none";
}

//Code to check that launcher is loading
var retries = 0;
var launcherExist = setInterval(function() {
  if ($('.intercom-launcher-frame').length) {
    $('.checkmark').css({'display':'inline-block'});
    $('.still-no-messenger').hide();
    clearInterval(launcherExist);
  }
  retries += 1;
  if (retries >= 120) {
    clearInterval(launcherExist);
  }
}, 500);