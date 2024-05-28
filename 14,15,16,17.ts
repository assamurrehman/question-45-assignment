let guest_list:string[]=['hadi','assam','azlan','masood'];
// for(let i=0; i < guess_list.length;i++) {
//     console.log('dear ;'+guess_list[i]+',\nyou r invited as a guest' +',\nby tomorrow');
// }
let not_available:string="masood";
let new_guest:string="saba";
 guest_list[3] = new_guest;
// for(let i=0;i<guess_list.length;i++){
//     console.log('dear :'+guess_list[i]+',\nyou r invited as a new guest by tomorrow');

// }
console.log(`${not_available}is not available by tomorrow`);
guest_list.unshift('taha','anas','rafay');
// for(let i=0;i<guess_list.length;i++){
//     console.log('dear :'+guess_list[i]+',\nyou r invited we have found a bigger table');

// }
console.log('\nunfortunately we cannot arrange a big table, so we have space for only two people')
while(guest_list.length>2){
    let removeguest=guest_list.pop();
    console.log(`sorry ,${removeguest}we appologize for our inconvinience,you r not invited `)
}for(let i=0;i<guest_list.length;i++){
      console.log('dear :'+guest_list[i]+',\nyou r still invited by tomorrow');
    
    }
    guest_list.splice(0,2)
    console.log(guest_list)

    export{guest_list}