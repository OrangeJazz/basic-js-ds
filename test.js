let test = {
  value: 3,
  next: {
    value: 1,
    next: {
      value: 2,
      next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
    },
  },
};

function removeKFromList(l, k) {
  l.head = null;
  l.size = 0;
  let current = l.head;
  let prev = null;

  while (current != null) {
    if (current.value === k) {
      if (prev == null) {
        l.head = current.next;
      } else {
        prev.next = current.next;
      }
      l.size--;
      return current.value;
    }
    prev = current;
    current = current.next;
  }
  return -1;
}

removeKFromList(test, 3);
