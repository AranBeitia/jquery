import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  $('#contact_form').on('submit', sendForm)
  let wrapper = $('#contact_form')
  let p = $('<p></p>')
  p.text('The values are empty')


  function sendForm(e) {
    e.preventDefault()

    if(!$('#name').val() && !$('#email').val()) {
      wrapper.append(p)
    }
  }
}
exercise14()
export default exercise14;
