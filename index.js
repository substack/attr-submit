var isArray = require('isarray');

module.exports = function (cb) {
    return function (elem, key) {
        elem.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var fields = {};
            var elems = elem.querySelectorAll('*[name]');
            for (var i = 0; i < elems.length; i++) {
                var value = elems[i].value;
                var name = elems[i].getAttribute('name');
                
                if (fields[name] && !isArray(fields[name])) {
                    fields[name] = [ fields[name] ]
                }
                
                if (fields[name]) fields[name].push(value);
                else fields[name] = value;
            }
            cb(elem, fields, key);
        });
    };
};
