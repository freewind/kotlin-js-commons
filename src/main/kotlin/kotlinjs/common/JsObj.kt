@file:Suppress("unused", "NOTHING_TO_INLINE", "FunctionName", "UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")

package kotlinjs.common

import kotlin.js.Json
import kotlin.js.json

inline fun <T> JsObj(): T = js("({})") as T
inline fun JsObj(): Json = json()
