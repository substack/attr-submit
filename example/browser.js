var submit = require('../');
var reg = submit(function (form, fields) {
    console.log(fields);
    form.reset();
});

var elems = document.querySelectorAll('*[x-submit]');
for (var i = 0; i < elems.length; i++) reg(elems[i]);
