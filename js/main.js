$(document).ready(function() {
  "use strict";

  // Current CO Sales Tax is 2.9%
  let taxRate = 0.029
  let subTotal = 0
  let tax = 0
  let total = 0

  $('.addToOrder').click(function(event) {
    let itemTitle = $($(this).parents('.card-body').find(".card-title")).text()

    let itemPriceText = $($(this).parents('.card-body').find(".price")).text()
    // ADDING TO THE ORDERED ITEMS LIST //
    $('.checkout-list').append(`<tr>
      <td class = 'co-text' colspan='5'>${itemTitle}</td>
      <td>${itemPriceText}</td>
    </tr>`)
    // TOTALING THE ORDER //
    let itemCost = $(this).data('value')

    subTotal += itemCost
    tax = subTotal * taxRate
    total = subTotal + tax

    // APPENDING THE TOTALS TO THE TABLE //
    $('#subtotal').text(`$${subTotal.toFixed(2)}`)
    $('#tax').text(`$${tax.toFixed(2)}`)
    $('#total').text(`$${total.toFixed(2)}`)
  })

  console.log('subTotal= ', subTotal.toFixed(2));
  console.log("tax= ", tax.toFixed(2));
  console.log("total=", total.toFixed(2));

  // FORM VALIDATION SCRIPT FROM BOOTSTRAP //

  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);

  // SUBMIT ORDER //
  $('.btn[name="place-order"]').click(function() {
    alert(`Thanks for usign G[Deliveries]\nEnjoy Your Food!`)
  })

}) // DOCUMENT READY FUNCTION
