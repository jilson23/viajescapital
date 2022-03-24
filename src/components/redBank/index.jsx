import { useEffect } from 'react';
import './style.css';
// import './config.js';

function handleSubmit(e) {
  e.preventDefault();
}

function RedBank() {
  useEffect(() => {
    const script = document.createElement('script');
    const script2 = document.createElement('script');
    script.src = 'https://cdn.globalpay.com.co/ccapi/sdk/payment_checkout_stable.min.js';
    script2.src = '/redbank.js';
    script.async = false;
    script2.async = false;

    document.body.appendChild(script);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="RedBank">
      <div className="details">
        <h2>Pagos con Tarjeta </h2>
        <form id="form" onSubmit={handleSubmit}>
          <div className="inputswrap">
            <div className="form-group">
              <input type="email" placeholder="Email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Teléfono" id="tel" />
              <label htmlFor="tel">Teléfono</label>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Descripción *" id="descript" required />
              <label htmlFor="descript">Descripción</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                min="1"
                placeholder="Cantidad sin puntos ni comas *"
                id="count"
                required
              />
              <label htmlFor="count">Cantidad</label>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Referencia *" id="ref" required />
              <label htmlFor="ref">Referencia</label>
            </div>
          </div>
          <span>Los campos con * son obligatorios</span>
          <button className="js-payment-checkout">Comprar</button>
        </form>
      </div>
      <div id="response"></div>
    </div>
  );
}

export default RedBank;
