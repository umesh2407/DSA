/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let ans = new ListNode();
    let ansHead = ans;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            ans.next = new ListNode(list1.val);
            ans = ans.next;
            list1 = list1.next;
        } else if (list1.val > list2.val) {
            ans.next = new ListNode(list2.val);
            ans = ans.next;
            list2 = list2.next;
        } else {
            ans.next = new ListNode(list1.val);
            ans = ans.next;
            list1 = list1.next;

            ans.next = new ListNode(list2.val);
            ans = ans.next;
            list2 = list2.next;
        }
    }

    // Jo list bachi hai, usko add karo
    while (list1) {
        ans.next = new ListNode(list1.val);
        ans = ans.next;
        list1 = list1.next;
    }

    while (list2) {
        ans.next = new ListNode(list2.val);
        ans = ans.next;
        list2 = list2.next;
    }

    return ansHead.next;
};