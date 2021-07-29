import $ from "jquery";

function exercise09() {
  // Complete the code of the function
  let image = $('img')
  let url = image.attr('data-lazy')
  image.attr('src', url)
  image.removeAttr('data-lazy')
}
exercise09()
export default exercise09;
