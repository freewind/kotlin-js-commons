@file:Suppress("unused", "FunctionName")

package kotlinjs.common

import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Window

inline fun Window.getSelection(): Selection? {
    return this.asDynamic()["getSelection"]().unsafeCast<Selection>()
}

fun Window.getSelectionHtml(): String? {
    window.getSelection()?.let { selection ->
        selection.rangeCount?.let { rangeCount ->
            val container = document.createElement("div") as HTMLDivElement
            for (index in 0 until rangeCount) {
                container.appendChild(selection.getRangeAt(index).cloneContents())
            }
            return container.innerHTML
        }
    }
    return null
}
