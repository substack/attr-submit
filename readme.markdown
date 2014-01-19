# attr-submit

register form submit handlers by dom attributes

# example

``` html
<html>
  <form x-submit="beep">
    <input type="text" name="msg">
    <input type="submit" value="submit">
  </form>
</html>
```

``` js
var submit = require('attr-submit');
var reg = submit(function (form, fields) {
    console.log(fields);
    form.reset();
});

var elems = document.querySelectorAll('*[x-submit]');
for (var i = 0; i < elems.length; i++) reg(elems[i]);
```

or with [attractor](https://npmjs.org/package/attractor):

```
var attractor = require('attractor');
var scope = {
    beep: function (form, fields) {
        console.log(fields);
        form.reset();
    }
};

var attr = attractor({
    'x-submit': require('attr-submit')
});
attr.scan(document);
```

# methods

``` js
var submit = require('attr-submit');
```

## var reg = submit(cb)

Register a handler `cb(form, fields)` to fire on form submission. `fields` is an
object mapping input names to values.

## reg(elem)

Register listeners for the form element `elem`.

# install

With [npm](https://npmjs.org) do:

```
npm install attr-submit
```

# license

MIT
