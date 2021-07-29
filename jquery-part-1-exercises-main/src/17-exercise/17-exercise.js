import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  let list = $('.ex-list').children()

  list.each( (i, item )=> $(item).css('font-weight', 'bold'))
  console.log(list);
}
exercise17()
export default exercise17;
