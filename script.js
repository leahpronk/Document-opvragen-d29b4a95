new Document();
document.write(document.location);
document.write(document.doctype);
document.write(document.title);

var object = document.body;
document.body = object;
