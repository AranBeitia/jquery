import $ from "jquery";

function exercise13() {
  // Complete the code of the function
  let button = $('#toggle_classes')
  button.on('click', function () { $(this).toggleClass('hovered') })
}
exercise13()
export default exercise13;
