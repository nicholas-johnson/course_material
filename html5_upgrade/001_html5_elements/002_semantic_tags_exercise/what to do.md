# XHTML to HTML conversion kit

In this section, you're going to convert an frumpy old XHTML file, including CSS into a brand new HTML5 file. To do this exercise you'll need a browser other than Internet Explorer 6, 7 or 8. Use IE9, Firefox, Opera, Safari, Chrome, RockMelt, IceWeasel, etc... We'll get to Internet Explorer later.

## First make a copy of the file

We're going to use the index.html file and style.css file, so make a copy of these to work in, so that you can refer back to the original.

## Change the Doctype

First up you'll need to change the doctype. Change the first line to:

    <!DOCTYPE html>

See how much code you just deleted? Your markup feels lighter already!

## Fix the stylesheet import

You stylesheet link tag is bloated. Sort that problem!

## Fix the Header

Find the header of the page. Replace the:

    <div class="header">

with a:

    <header>

Now find the CSS that matches .header and change it to match header.

In older browsers, the header tag has no default styling, so you'll need to add display:block to the list of rules or it will display inline.

View your new page in a browser (not Internet Explorer) and ensure it still looks right.

## Style the Top Navigation

Find the top nav and wrap the:

    <ul class="top_nav">

in:

    <nav>

tags

Again update your CSS to make it good. Remember to display:block.

Do the same with the main nav. Remember, the new tags can have classes. You'll probably want to use classes on your nav tags to differentiate them.

## Add in an article

Now get your content div:

    <div class="content">

and replace it with an article:

    <article>

Again, update the CSS.

You may also want to add sections in your article.

## How about a figure?

Find the paragraph containing the image and caption span.

    <p>
      <img src="HTML5_Logo.png" alt="the html5 logo" />
      <span class="caption">The HTML5 Logo</span>
    </p>

Replace the paragraph and caption text with figure and figcaption.

Finally update your CSS so it still works. Remember a figure will have a little margin by default. You may wish to remove this.

## Now for an Aside

The right hand sidebar containing the quote is marked up with a div:

    <div class="extra">

It would more appropriately be marked up with an aside:

   <aside>

Make the change and update the CSS.

## Footer

Now find the footer which is currently marked up with a div.

    <div class="footer">

Remove the div and replace it with a:

    <footer>

tag.

Again, change your CSS to work. As with all of these tags, the footer is has no default styling, so you'll need to declare

    display:block

in your CSS.

## What about an address?

There is an address in the footer. Mark it up as such.

## Now fix it in IE

Brilliant, now take a look at it in Internet Explorer 8 or less. Oh dear.

IE doesn't render HTML tags that it doesn't recognise. Other browsers sensibly render unknown tags, but without default styling, and this is what we see now. Unfortunately IE doesn't. In a hamfisted attempt to be standards compliant, it simply chucks away tags it doesn't understand.

Since IE9 won't run in Windows XP, and a lot of people bizarrely love XP, it appears we'll be stuck with this issue for a little while.

Luckily there is a fix.

If you want to provide support for IE6 to 8, you'll need to use a "shiv", a piece of script that "shows" IE the new elements. You can get this from here:

    http://code.google.com/p/html5shiv/

A shiv is an improvised stabbing weapon, commonly a prison weapon, possibly a sharpened toothbrush or similar. This seems appropriate.

    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

## More work

Some of you will finish faster than others. If you're in the first group, grab one of your own web pages, save a local copy, and convert it to html5. I'll be interested to see what you come up with.