type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public head?: Node<T>;
    public length: number = 0;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(value: T): void {
        this.length++;
        const node = { value } as Node<T>;

        if (!this.head) {
            this.head = node;
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
