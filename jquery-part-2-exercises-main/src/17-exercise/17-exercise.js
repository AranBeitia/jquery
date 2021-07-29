import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  $('.mb').on('click', function() {
    $('.img').animate(
      {
        width: '20em',
        height: '16em',
        left: '40px'
      },
      300
    )
  })
}
exercise17()
export default exercise17;
