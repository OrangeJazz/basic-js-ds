const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

//  class SinglyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }

function removeKFromList(l, k) {
  function indexOf(l, k) {
    let current = l;
    let index = 0;
    while (current) {
      if (current.value === k) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  function remove(l, k) {
    l = removeAt(l, indexOf(l, k));
    return l;
  }

  function removeAt(l, position) {
    const length = getLength(l);
    if (position < 0 || length <= position) {
      return null;
    }
    if (l == null) return null;
    let temp = l;
    if (position == 0) {
      l = temp.next;
      return l;
    }
    for (i = 0; l != null && i < position - 1; i++) temp = temp.next;
    let next = temp.next.next;
    temp.next = next;
    return l;
  }

  function getLength(l) {
    let head = l;
    let temp = head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  while (indexOf(l, k) != -1) {
    l = remove(l, k);
  }
  return l;
}

module.exports = {
  removeKFromList,
};
