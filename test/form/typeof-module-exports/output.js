import * as commonjsHelpers from 'commonjsHelpers';

var input = commonjsHelpers.createCommonjsModule(function (module, exports) {
var foo = 42;

if ( 'object' === 'object' && 'object' === 'object' ) {
	module.exports = foo;
} else if ( typeof undefined === 'function' && undefined.amd ) {
	undefined([], function () { return foo; });
} else {
	window.foo = foo;
}
}, 'input.js');

export default input;
export { input as __moduleExports };
