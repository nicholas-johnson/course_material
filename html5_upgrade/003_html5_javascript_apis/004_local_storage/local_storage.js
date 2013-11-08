$(function() {

  $('form').submit(function(e) {
    var value = $('input[type=text]').val();
    if (window.localStorage) {
      localStorage['name'] = value;
    } else {
      alert("Sorry!");
    }
    //e.preventDefault();
  });
  $('h1').append(localStorage['name']);
});



/*
  Test for Local Storage
  save from a form
*/
