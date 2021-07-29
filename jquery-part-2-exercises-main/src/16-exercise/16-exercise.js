import $ from "jquery";

function exercise16() {
  // Complete the code of the function
  $('.mb').on('click', function(){
    $('.box').animate(
      {height: 'toggle'},
      1000,
      'swing'
    )
  })
}
exercise16()
export default exercise16;
