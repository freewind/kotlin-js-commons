if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-commons'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-commons'.");
}
this['kotlin-js-commons'] = function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var JsObj = defineInlineFunction('kotlin-js-commons.kotlinjs.common.JsObj_287e2$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function () {
      var tmp$;
      return (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }));
  var JsObj_0 = defineInlineFunction('kotlin-js-commons.kotlinjs.common.JsObj', wrapFunction(function () {
    var json = Kotlin.kotlin.js.json_pyyo18$;
    return function () {
      return json([]);
    };
  }));
  var package$kotlinjs = _.kotlinjs || (_.kotlinjs = {});
  var package$common = package$kotlinjs.common || (package$kotlinjs.common = {});
  package$common.JsObj_287e2$ = JsObj;
  package$common.JsObj = JsObj_0;
  Kotlin.defineModule('kotlin-js-commons', _);
  return _;
}(typeof this['kotlin-js-commons'] === 'undefined' ? {} : this['kotlin-js-commons'], kotlin);
