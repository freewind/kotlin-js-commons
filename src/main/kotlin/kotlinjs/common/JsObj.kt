@file:Suppress("unused", "NOTHING_TO_INLINE", "FunctionName", "UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")

package kotlinjs.common

inline fun <T> jsonAs(): T = js("({})") as T
