import $ from "jquery";

function exercise12() {
  // Complete the code of the function
  let cities = ["Barcelona", "Madrid", "Sevilla"];
  let list = $('<ul></ul>')
  list.addClass('ex-list')
  $('.ex-wrapper').append(list)

  cities.forEach(city => {
    let li = $(`<li>${city}</li>`)
    li.addClass('ex-list-item')
    list.append(li)
  })
}
exercise12()
export default exercise12;
