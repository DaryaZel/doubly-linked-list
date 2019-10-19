const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        }
        else {

            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {
        let current = this._head
        let counter = 1
        if (index == 0) {
            return current.data
        }
        else {
            while (current) {
                current = current.next
                if (counter == index) {
                    return current.data
                }
                counter++
            }
        }

    }

    insertAt(index, data) {
        let current = this._head;
        let counter = 1;
        let node = new Node(data)
        if (index == 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node
        }
        else {
            while (current) {
                current = current.next
                if (counter == index) {
                    current.prev.next = node
                    current.prev = node;
                    node.prev = current.prev;
                    node.next = current;
                }
                counter++
            }
        }
        return this
    }

    isEmpty() {
        if (this._tail && this._head) {
            return false
        }
        else {
            return true
        }
    }

    clear() {
        let current = this._head;
        while (current) {
            debugger
            current = current.next;
            if (current != this._tail && current != null) {
                current.prev.next = null;
                current.prev = null;
            }
        }
        this._head.data = null
        this._tail.prev = null
        this._tail.data = null
        this.length = 0
        return this
    }

    deleteAt(index) {
        let current = this._head;
        let counter = 1;
        if (index == 0) {
            if (this._head.next) {
                this._head = this._head.next;
                this._head.prev = null
            }
            else {
                this._head.data = null
            }
        }
        else {
            while (current) {
                current = current.next
                if (counter == index) {
                    current.next.prev = current.prev;
                    current.prev.next = current.next;
                    current = current.next
                }
                counter++
            }
        }
        return this
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while (current) {
            let next = current.next
            current.next = prev
            current.prev = next
            prev = current
            current = next
        }
        this._tail = this._head
        this._head = prev
        return this
    }

    indexOf(data) {
        let current = this._head
        let counter = 1
        if (current.data == data) {
            return 0
        }
        else {
            while (current) {
                current = current.next
                if (current && current.data == data) {
                    return counter
                }
                counter++
                return -1

            }

        }

    }

}

module.exports = LinkedList;
