
# The File API

The new File API allows you to access the local filesystem. Pretty cool.

Of course you can't just go grabbing any files, that would be a security problem. You're limited to files which users have selected in a file field.

We can get the file content of a file field, then convert into a data URL to display on the page.

    var fileField = form.find('input[type=file]');
    var file = fileField[0].files[0];
    var reader = new FileReader();

    reader.onload = (function(file) {
      return function(e) {
        form.find('img.thumb').remove();
        var thumb = $(['<img class="thumb" src="', e.target.result, '" title="', escape(file.name), '"/>'].join(''));
        fileField.after(thumb);
      };
    })(file);

    reader.readAsDataURL(file);

The above code will read a file from an input of type=file, convert it to a data url and display it.

## Developer Exercise

1. Create a form with an input of type=file on it (or use the form from the previous exercise)
2. When the value of the input is changed ($(input).change(function() {});) grab the file and render it on the page.
3. Integrate this with the previous exercise, so selecting a file grabs it, renders a preview to the page, and uploads it to the server.
4. Ensure the form remains submittable in the absence of

For further information, please see HTML5Rocks: http://www.html5rocks.com/en/tutorials/file/dndfiles/