import $ from "jquery";

function exercise11() {
  // Complete the code of the function
  let p = $('<p></p>')
  let height = parseInt($('.box').height())


  $('button').on('click', function() {
    $('.box').append(p)
    console.log(height);
  })
}
exercise11()
export default exercise11;
