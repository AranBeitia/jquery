import $ from "jquery";

function exercise16() {
  // Complete the code of the function
  $('#contact_form').on('submit', function(e) {
    e.preventDefault()
    let p = $('<p>Message Sent!</p>')
    $(this).after(p)
  })
  
}
exercise16()
export default exercise16;
