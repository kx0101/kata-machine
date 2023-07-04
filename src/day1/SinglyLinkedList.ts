class Node<T> {
    public value: T;
    public next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    prepend(item: T): void {
        const newNode = new Node(item);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        const newNode = new Node(item);
        let curr = this.head;
        let prev = null;

        while (curr && idx > 0) {
            prev = curr;
            curr = curr.next;
            idx--;
        }

        prev!.next = newNode;
        newNode.next = curr;
    }

    append(item: T): void {
        this.length++;
        const newNode = new Node(item);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        if (this.head.value === item) {
            this.head = this.head.next;
            return item;
        }

        let curr = this.head;

        while (curr.next) {
            if (curr.next.value === item) {
                curr.next = curr.next.next;
                return item;
            }

            curr = curr.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let curr = this.head;

        while (curr && idx > 0) {
            curr = curr.next;
            idx--;
        }

        return curr!.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || !this.head) {
            return undefined;
        }

        this.length--;

        if (idx === 0) {
            const value = this.head.value;
            this.head = this.head.next;

            return value;
        }

        let curr = this.head;
        let prev = null;

        while (curr && idx > 0) {
            prev = curr;
            curr = curr.next!;
            idx--;
        }

        prev!.next = curr!.next;

        return curr!.value;
    }
}
