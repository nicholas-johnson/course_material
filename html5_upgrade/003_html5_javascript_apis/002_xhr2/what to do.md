# The XMLHttpRequest2 API

The XHR2 API gives you an improved way to generate AJAX requests. We're going to look at one particular aspect here, the FormData object. The FormData object gives us a JAvaScript representation of the data in a form. We can generate one directly from a form like this:

    var form = $('form')[0];
    var data = new FormData(form);

You can also compose one manually like this:

    var data = new FormData();
    data.append('name', 'james bond');
    data.append('licenced_to', 'kill');

You can then submit this via a post request like this:

    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: data,
      processData: false,
      contentType: false,
    });

This is awesome because up till now it has been impossible to submit files via AJAX. We have had to resort to flash file uploaders or iFrame hacks. The FormData object doesn't care what type of data you have.

This allows us to create things like inline profile picture updates that are submitted to the server behind the scenes.

## Developer Exercise

We're going to create an AJAX profile picture updater.

1. Create an html5 form with a input of type file.
2. Write JavaScript which intecepts the submit event and handles it. Use JQuery for an easier time, or if you prefer, naked JavaScript.
3. Serialise the form to a FormData object.
4. Have the FormData object submit via AJAX.
5. Using whatever backend you feel comfortable with, receive the file and save it.

For more on FormData check out the Mozilla docs here:
https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects