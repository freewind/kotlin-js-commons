if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'hello'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'hello'.");
}
var hello = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  function main(args) {
    var x = json([]);
    x['key1'] = 'value1';
    x['key2'] = 'value2';
    console.log(x);
  }
  var JsObj = defineInlineFunction('hello.kotlinjs.common.JsObj_287e2$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function () {
      var tmp$;
      return (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }));
  var JsObj_0 = defineInlineFunction('hello.kotlinjs.common.JsObj', wrapFunction(function () {
    var json = Kotlin.kotlin.js.json_pyyo18$;
    return function () {
      return json([]);
    };
  }));
  $$importsForInline$$.hello = _;
  var package$example = _.example || (_.example = {});
  package$example.main_kand9s$ = main;
  var package$kotlinjs = _.kotlinjs || (_.kotlinjs = {});
  var package$common = package$kotlinjs.common || (package$kotlinjs.common = {});
  package$common.JsObj_287e2$ = JsObj;
  package$common.JsObj = JsObj_0;
  main([]);
  Kotlin.defineModule('hello', _);
  return _;
}(typeof hello === 'undefined' ? {} : hello, kotlin);
