const AddToCart = class extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    const productId = this.querySelector('input[data-variant]').value;
    const quantity = this.querySelector('input[data-quantity]').value;
    this.fetchAddToCart(productId, quantity);
  }

  async fetchAddToCart(id, quantity) {
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        quantity,
      }),
    });
  }
};
window.customElements.define('add-to-cart', AddToCart);
