@file:Suppress("unused")

package kotlinjs.common

import org.w3c.dom.Node
import org.w3c.dom.Range

external interface Selection {
    var anchorNode: Node?
    var anchorOffset: Int?
    var focusNode: Node?
    var focusOffset: Int?
    var isCollapsed: Boolean?
    var rangeCount: Int?
    var type: String?

    fun addRange(range: Range)
    fun collapse(node: Node?, offset: Int = definedExternally)
    fun collapseToEnd()
    fun collapseToStart()
    fun containsNode(node: Node, partialContainment: Boolean = definedExternally)
    fun deleteFromDocument()
    fun empty()
    fun extend(node: Node, offset: Int = definedExternally)
    fun getRangeAt(index: Int): Range
    fun modify(alter: String, direction: String, granularity: String)
    fun removeRange(range: Range)
    fun removeAllRanges()
    fun selectAllChildren(parentNode: Node)
    fun setBaseAndExtent(anchorNode: Node, anchorOffset: Int, focusNode: Node, focusOffset: Int)
    fun setPosition(node: Node?, offset: Int = definedExternally)
}