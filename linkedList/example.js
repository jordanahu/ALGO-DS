// given an integer, write a function to determine if 
// after repeatedly replacnig it with an integer equal to the sum
// oof the square of all of its digits, leads us to the number 1
 
// examples
// input: 23
// output: true;
let Node = require("./listNode");


function accToOne(n) {
    let head = null;
    let counter = 0;
    let found = false;

    function buildList(n) {
        let nextSquareSum = [...n.toString()].reduce((acc, n) => acc + Number(n) ** 2, 0);
        let newNode = new Node(nextSquareSum);

        if (!head) {
            head = newNode
            counter++
        } else {
            newNode.next = head;
            head = newNode
            counter++
        }

        if (counter % 4 == 0) {
            let tortoise = head;
            let hare = head;
            while (tortoise != null && tortoise.next != null) {
                if (tortoise.value == 1 || hare.value == 1) {

                    found = true;
                    return true;
                }
                if (tortoise == hare) {
                    found = false;
                    return false
                }

                tortoise = tortoise.next.next;
                hare = hare.next;
            }
        }

        buildList(nextSquareSum)

    }

    buildList(n)
    return found;


}

console.log(accToOne(13))

