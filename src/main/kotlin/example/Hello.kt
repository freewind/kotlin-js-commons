package example

import kotlinjs.common.JsObj

fun main(args: Array<String>) {
    val x = JsObj()
    x["key1"] = "value1"
    x.set("key2", "value2")
    console.log(x)
}
