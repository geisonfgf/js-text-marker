js-text-marker
==============

Javascript lib that mark string in a text. It is possible mark the text with html tags.

Installation
============

Gemfile
-------

1) run this line in your prompt

    $ npm install js-text-marker

Usage
=====

```javascript
var JsTextMarker = require('js-text-marker');

var snippet_to_be_marked = "text";
var text = "Some text to be marked. After used TextMaker in this text " +
           "it will return this text with desired text marked.";

var tm_tag1 = new Tag('h1', 'yellow', 'black');
var tm = new JsTextMarker(text);

var text_with_all_ocurrence_of_snipped_marked = tm.mark_all_ocurrence_of(
    snippet_to_be_marked, tm_tag1);

var text_with_all_ocurrences_of_snipped_marked = tm.mark_all_ocurrence_of(
    snippet_to_be_marked, new Tag(span));

var text_with_first_ocurrence_of_snipped_marked = tm.mark_first_ocurrence_of(
    snippet_to_be_marked, new Tag('span', 'yellow'));
```

Author
======

#### Created and maintained by
Geison Felipe Goes Flores

geisonfgf@gmail.com

@geisonfgfg

## Contributing

1. Fork it ( https://github.com/[my-github-username]/text-marker/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

License
=======

TextMarker is licensed under the MIT license.

See LICENSE for the full license text.
