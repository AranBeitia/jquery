import $ from "jquery";

function exercise01() {
  // Complete the code of the function
  let p = $('<p></p>')
  let style = $('.box').css('padding')
  p.text(style)
  $('.box').after(p)
}
exercise01()
export default exercise01;
