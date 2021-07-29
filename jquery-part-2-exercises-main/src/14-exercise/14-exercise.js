import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  $('button').on('click', function() {
    let height = parseInt($('.box').outerHeight())
    let width = parseInt($('.box').outerWidth())

    $('.box').outerWidth(height)
    $('.box').outerHeight(width)
  })
}
exercise14()
export default exercise14;
