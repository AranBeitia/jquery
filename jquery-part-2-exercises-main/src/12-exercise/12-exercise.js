import $ from "jquery";

function exercise12() {
  // Complete the code of the function
  $('button').on('click', function() {
    let width = parseInt($('.box').width())
    let height = parseInt($('.box').height())

    $('.box').width(width + 20)
    $('.box').height(height + 20)
    $('.box').text(width + "x" + height)
  })
}
exercise12()
export default exercise12;
