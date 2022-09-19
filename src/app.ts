class Card {
  hostElement: HTMLElement;
  cardElement: HTMLElement;
  image: string;

  constructor(
    private brandType: string,
    private title: string,
    private description: string,
    private price: number,
    private discount: number
  ) {
    this.image = './images/image-product-mobile.jpg';

    this.hostElement = document.getElementById('app') as HTMLElement;
    this.cardElement = document.createElement('main') as HTMLElement;

    this.attach();
  }

  attach() {
    this.cardElement.className = 'card';
    this.cardElement.innerHTML = `
              <div class="card__image">
                <img src="${this.image}" alt="${this.title}">
              </div>
              <div class="card__content">
                <span class="card__brand">${this.brandType}</span>
                <h2 class="card__title">${this.title}</h2>
                <p class="card__description">${this.description}</p>
                <div class="card__price">
                    <span class="card__price--discounted">$${
                      this.price - this.discount
                    }</span>
                    <span class="card__price--original">$${this.price}</span>
                </div>
                <button class="card__button">
                <img src='./images/icon-cart.svg' class="card__button--icon"></img>
                Add to Cart
                </button>

              </div>
         `;
    this.hostElement.appendChild(this.cardElement);
    window.addEventListener('resize', this.widthChangeHandler.bind(this));
  }

  private widthChangeHandler() {
    const innerWidth = window.innerWidth;

    if (innerWidth > 768) {
      this.cardElement.querySelector('img')!.src =
        './images/image-product-desktop.jpg';
    } else {
      this.cardElement.querySelector('img')!.src =
        './images/image-product-mobile.jpg';
    }
  }
}

const card = new Card(
  'Perfume',
  'Gabrielle Essence Eau De Parfum',
  'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  169.99,
  20
);
