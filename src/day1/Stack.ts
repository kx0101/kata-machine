type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public head?: Node<T>;
    public tail?: Node<T>;
    public length: number;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    push(value: T): void {
        const node = { value } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            const value = this.head.value;
            this.head = undefined;
            this.length--;

            return value;
        }

        this.length--;

        const value = this.head.value;
        this.head = this.head.prev;

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
