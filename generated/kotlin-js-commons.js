if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-commons'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-commons'.");
}
this['kotlin-js-commons'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function injectScript($receiver, url) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var script = Kotlin.isType(tmp$ = $receiver.createElement('script'), HTMLScriptElement) ? tmp$ : throwCCE();
    script.src = url;
    (tmp$_3 = (tmp$_2 = (tmp$_0 = $receiver.body) != null ? tmp$_0.appendChild(script) : null) != null ? tmp$_2 : (tmp$_1 = $receiver.head) != null ? tmp$_1.appendChild(script) : null) != null ? tmp$_3 : $receiver.appendChild(script);
  }
  var jsonAs = defineInlineFunction('kotlin-js-commons.kotlinjs.common.jsonAs_287e2$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function () {
      var tmp$;
      return (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }));
  var getSelection = defineInlineFunction('kotlin-js-commons.kotlinjs.common.getSelection_nz12v2$', function ($receiver) {
    return $receiver['getSelection']();
  });
  function getSelectionHtml($receiver) {
    var tmp$;
    if ((tmp$ = $receiver.window['getSelection']()) != null) {
      var tmp$_0;
      if ((tmp$_0 = tmp$.rangeCount) != null) {
        var tmp$_1;
        var container = Kotlin.isType(tmp$_1 = $receiver.document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
        for (var index = 0; index < tmp$_0; index++) {
          container.appendChild(tmp$.getRangeAt(index).cloneContents());
        }
        return container.innerHTML;
      }
    }
    return null;
  }
  var package$kotlinjs = _.kotlinjs || (_.kotlinjs = {});
  var package$common = package$kotlinjs.common || (package$kotlinjs.common = {});
  package$common.injectScript_faw09z$ = injectScript;
  package$common.jsonAs_287e2$ = jsonAs;
  package$common.getSelection_nz12v2$ = getSelection;
  $$importsForInline$$['kotlin-js-commons'] = _;
  package$common.getSelectionHtml_nz12v2$ = getSelectionHtml;
  Kotlin.defineModule('kotlin-js-commons', _);
  return _;
}(typeof this['kotlin-js-commons'] === 'undefined' ? {} : this['kotlin-js-commons'], kotlin);
