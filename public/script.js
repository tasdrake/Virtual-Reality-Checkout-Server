// //ate a Stripe client
// $( document ).ready(function() {
//   var stripe = Stripe('pk_test_zNnQiNYcPwaufUQMAWaN6fbC');
//   var elements = stripe.elements();
//   var style = {
//     base: {
//       color: '#32325d',
//       lineHeight: '24px',
//       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//       fontSmoothing: 'antialiased',
//       fontSize: '16px',
//       '::placeholder': {
//         color: '#aab7c4'
//       }
//     },
//     invalid: {
//       color: '#fa755a',
//       iconColor: '#fa755a'
//     }
//   };
//   var card = elements.create('card', {style: style});
//   card.mount('#card-element');
//
//
//   document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var form = document.querySelector('form');
//     //console.log('logging form', form)
//     var extraDetails = {
//       name: form.querySelector('input[name=cardholder-name]').value,
//       phone: form.querySelector('input[name=cardholder-phone]').value,
//     };
//     console.log(extraDetails)
//
//     stripe.createToken(card, extraDetails).then((result)=>{
//       let data = result
//       const options = {
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         dataType: 'json',
//         type: 'POST',
//         url: '/'
//       };
//
//       $.ajax(options).done((result)=>{
//         console.log(result)
//       })
//     });
//
//
//   });
//
//
//
//
//
//
//   // card.addEventListener('change', function(event) {
//   //   var displayError = document.getElementById('card-errors');
//   //   if (event.error) {
//   //     displayError.textContent = event.error.message;
//   //   } else {
//   //     displayError.textContent = '';
//   //   }
//   // });
//
//
//
//
//   // var form = document.getElementById('payment-form');
//   // form.addEventListener('submit', function(event) {
//   //   event.preventDefault();
//   //   stripe.createToken(card,{
//   //     cardData:{
//   //       address_line1:'221b Baker St.',
//   //       address_state: 'Alabama',
//   //       address_zip: 20202,
//   //       addresss_country:'USA'
//   //     }
//   //   }).then(function(result) {
//   //     console.log(card)
//   //     if (result.error) {
//   //       var errorElement = document.getElementById('card-errors');
//   //       errorElement.textContent = result.error.message;
//   //     } else {
//   //       console.log(result);
//   //       // Send the token to your server
//   //       let data = result.token
//   //
//   //       const options = {
//   //         contentType: 'application/json',
//   //         data: JSON.stringify(data),
//   //         dataType: 'json',
//   //         type: 'POST',
//   //         url: '/'
//   //       };
//   //
//   //       $.ajax(options).done((result)=>{
//   //         console.log(result)
//   //       })
//   //
//   //       //stripeTokenHandler(result.token);
//   //     }
//   //   });
//   // });
//
//
//
// });
