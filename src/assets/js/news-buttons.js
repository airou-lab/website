// Operates each image slideshow
var snippets = document.getElementsByClassName("news-snippet");
for (i = 0; i < snippets.length; i++) {
    snippets[i].setAttribute("data-currentslide", 0);
    showDivs(snippets[i].getAttribute("data-currentslide"), i);
}

function plusDivs(slideoffset, snippetId) {
    currentslide = parseInt(snippets[snippetId].getAttribute("data-currentslide"))
    showDivs(currentslide + slideoffset, snippetId);
}

function showDivs(slidenumber, snippetId) {
    var snippet_obj = snippets[snippetId];
    var images = snippet_obj.getElementsByClassName("imager");

    // Set currentslide in object
    if (slidenumber >= images.length) {
        snippet_obj.setAttribute("data-currentslide", 0);
    } else if (slidenumber < 0) {
        snippet_obj.setAttribute("data-currentslide", images.length - 1)
    } else {
        snippet_obj.setAttribute("data-currentslide", slidenumber)
    }

    // Display currentslide
    slide_display = parseInt(snippets[snippetId].getAttribute("data-currentslide"));

    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slide_display].style.display = "block";
}

function openDialog(snippet) {
    console.log(snippet);
    const dialog = document.getElementById(snippet);
    console.log(dialog);
    dialog.show();
}