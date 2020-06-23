# Dropdown with Search

> This dropdown uses the Semantic UI Dropdown library.

## Installation / Import
Add the following to your `$data` variable of your controller:

`$data` Index | Value
-----|-----
css | /assets/bower_components/semantic-ui-transition/transition.min.css
css | /assets/bower_components/semantic-ui-dropdown/dropdown.min.css
css | /assets/playground/dropdown-xtra.css
js | /assets/bower_components/semantic-ui-transition/transition.min.js
js | /assets/bower_components/semantic-ui-dropdown/dropdown.min.js

## HTML DOM
`<div class="floating ui dropdown selection form-control labeled button" style="margin-top: 5px">`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<select type="hidden" id="">`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<option value="{option-1-value}">{Option 1 Text}</option>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<option value="{option-2-value}">{Option 2 Text}</option>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<option value="{option-3-value}">{Option 3 Text}</option>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<option value="{option-n-value}">{Option N Text}</option>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`</select>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<i class="dropdown icon"></i>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="default text">{Your default text here/selected text on load}</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="menu">`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="ui icon search input fluid">`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<i class="search icon"></i>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<input type="text" name="search" placeholder="Search..." class="form-control fluid">`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="divider"></div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="item" data-value="{option-1-value}">{Option 1 Text}</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="item" data-value="{option-2-value}">{Option 2 Text}</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="item" data-value="{option-3-value}">{Option 3 Text}</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="item" data-value="{option-n-value}">{Option N Text}</div>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`</div>`<br />
`</div>`<br />

> if you do not need to add additional attributes/data to your **options**, you can use `<input type="hidden" type="hidden" id="" value="{default value/selected value on load}" />` instead of the `select` element

## Initialization
Add the following code to your *js file* on initialization. In case of a dynamic `select` element, just call this line of code after setting up the new `HTML` of the `select` element<br />

`$(".ui.dropdown").dropdown()`<br />

If your selector is the `select` (or `input`) element itself, then use:<br />

`$({selector}).parent().dropdown()`

## Full Text Search
By default, the search function will only look at the first letters/characters of the options. If you want to be able to search the full text then set the `fullTextSearch` option into **true**<br />
`$({selector}).dropdown({`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`fullTextSearch: true,`<br />
`});`<br />

For the full list of options, refer to the link below:<br />
https://1.semantic-ui.com/modules/dropdown.html

## Action Event
To set an action event, follow the code below:<br />
`$( {selector} ).dropdown( {`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`action: "activate",`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`onChange: function( value ){`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`// your event here`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`}`<br />
`} );`

## NOTE
Semantic UI Dropdown has more functionalities than the listed above. This documentation only covers how to use it for searchable dropdowns.

For more information on Semantic UI Dropdown, you can check the link below:<br />
https://1.semantic-ui.com/modules/dropdown.html
