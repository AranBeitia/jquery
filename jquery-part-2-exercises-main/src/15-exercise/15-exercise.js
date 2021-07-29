import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  $('button').on('click', function() {
    $('.box').animate(
      {
        height: '200px'
      },
      300,
      'linear'
    )
  })
}
exercise15()
export default exercise15;
