import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  let form = $('#contact_form')
  let p = $('<p></p>')
  form.append(p)

  form.on('submit', function(e) {
    e.preventDefault()
    p.text($('#name').val() + ', ' + $('#email').val())
    console.log('juju');
  })
}
exercise15()
export default exercise15;
