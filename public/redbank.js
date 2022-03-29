/* eslint-disable no-undef */

let paymentCheckout = new PaymentCheckout.modal({
  client_app_code: "VIAJESCAPITALSTG-GLP-CLIENT", // Application Code de las credenciales CLIENT
  client_app_key: "WjY2LnuZVAYMaKBxgS0I3REaoRcwcS", // Application Key de las credenciales CLIENT
  locale: "es", // Idioma preferido del usuario (es, en, pt). El inglés se usará por defecto
  env_mode: "prod", // `prod`, `stg`, `local` para cambiar de ambiente. Por defecto es `stg`
  onOpen: function () {

      console.log("Modal abierto");
  },
  onClose: function () {
      console.log("Modal cerrado");
  },
  onResponse: function (response) {
      // Funcionalidad a invocar cuando se completa el proceso de pago

      /*
          En caso de error, esta será la respuesta.
          response = {
            "error": {
              "type": "Server Error",
              "help": "Try Again Later",
              "description": "Sorry, there was a problem loading Checkout."
            }
          }

          Cual el usuario completa el flujo en el Checkout, esta será la respuesta
          response = {  
            "transaction":{  
                "status":"success", // Estado de la transacción
                "id":"CB-81011", // Id de la transacción de lado de la pasarela
                "status_detail":3 // Para más detalles de los detalles de estado: https://developers.globalpay.com.co/api/#detalle-de-los-estados
            }
          }
        */
      console.log("Respuesta de modal");

      console.log(response)
      const { transaction } = response;
      const {amount, status, id, message } = transaction
      if(status === 'failure'){
        document.getElementById("response").innerHTML = `Su transacción de $ ${amount} con el codigo ${id}, ha sido Rechazada, " ${message} "`;
      }else if(status === 'success'){
        document.getElementById("response").innerHTML = `Su transacción de $ ${amount} con el codigo ${id}, ha sido Aprobada, " ${message} "`;
      }else if(status === 'pending'){
        document.getElementById("response").innerHTML = `Su transacción de $ ${amount} con el codigo ${id}, La transacción está Pendiente, " ${message} "`;
      }
      
  },
});

let btnOpenCheckout = document.querySelector(".js-payment-checkout");
btnOpenCheckout.addEventListener("click", function () {
  // Open Checkout with further options:
  let paymentEmail = document.getElementById('email').value;
  let paymentPhone = document.getElementById('tel').value;
  let paymentDescription = document.getElementById('descript').value;
  let paymentAmount = document.getElementById('count').value;
  let paymentReference = document.getElementById('ref').value;

  paymentCheckout.open({
      user_id: "generico",
      user_email: paymentEmail, // Opcional
      user_phone: paymentPhone, // Opcional
      order_description: paymentDescription,
      order_amount: Number(paymentAmount),
      order_vat: 0,
      order_reference: paymentReference,
      //order_installments_type: 2, // Opcional: Para Ecuador los valores válidos son: https://developers.globalpay.com.co/api/#metodos-de-pago-tarjetas-cobro-con-token-tipos-de-diferidos. Para el resto de los países, 0 para permitir cuotas, -1 en caso contrario.
      //order_taxable_amount: 0, // Opcional: Solo disponible para Datafast (Ecuador). El importe imponible, si es cero, se calcula sobre el total. Formato: decimal con dos dígitos de fracción.
      //order_tax_percentage: 10 // Opcional: Solo disponible para Datafast (Ecuador). El porcentaje de impuestos que se aplicará a este pedido.
      //conf_exclusive_types: 'ak,ex', // Opcional: Tipos de tarjeta permitidos para esta operación. Opciones: https://developers.globalpay.com.co/api/#metodos-de-pago-tarjetas-marcas-de-tarjetas
      //conf_invalid_card_type_message: 'Tarjeta invalida para esta operación' // Opcional: Define un mensaje personalizado para mostrar para los tipos de tarjeta no válidos.
  });
});

// Cerrar el Checkout en la navegación de la página:
window.addEventListener("popstate", function () {
  paymentCheckout.close();
});