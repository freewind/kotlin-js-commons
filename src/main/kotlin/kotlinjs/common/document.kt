@file:Suppress("unused")

package kotlinjs.common

import org.w3c.dom.Document
import org.w3c.dom.HTMLScriptElement

fun Document.injectScript(url: String) {
    val script = this.createElement("script") as HTMLScriptElement
    script.src = url
    this.body?.appendChild(script)
            ?: this.head?.appendChild(script)
            ?: this.appendChild(script)
}
