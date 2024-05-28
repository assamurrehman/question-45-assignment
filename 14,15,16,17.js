"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['hadi', 'assam', 'azlan', 'masood'];
exports.guest_list = guest_list;
// for(let i=0; i < guess_list.length;i++) {
//     console.log('dear ;'+guess_list[i]+',\nyou r invited as a guest' +',\nby tomorrow');
// }
var not_available = "masood";
var new_guest = "saba";
guest_list[3] = new_guest;
// for(let i=0;i<guess_list.length;i++){
//     console.log('dear :'+guess_list[i]+',\nyou r invited as a new guest by tomorrow');
// }
console.log("".concat(not_available, "is not available by tomorrow"));
guest_list.unshift('taha', 'anas', 'rafay');
// for(let i=0;i<guess_list.length;i++){
//     console.log('dear :'+guess_list[i]+',\nyou r invited we have found a bigger table');
// }
console.log('\nunfortunately we cannot arrange a big table, so we have space for only two people');
while (guest_list.length > 2) {
    var removeguest = guest_list.pop();
    console.log("sorry ,".concat(removeguest, "we appologize for our inconvinience,you r not invited "));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('dear :' + guest_list[i] + ',\nyou r still invited by tomorrow');
}
guest_list.splice(0, 2);
console.log(guest_list);
