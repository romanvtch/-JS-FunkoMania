class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "Add to cart";
    this.labelRemove = "Remove from cart";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, tagOne, tagTwo, name, img, price }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
            <li class="products-element">
                <img class="products-element__img" src="${img}"/>
                <div class="pruducts-element__container">
                <span class="products-element__tagOne" >${tagOne}</span>
                <span class="products-element__tagTwo" >${tagTwo}</span>
                </div>
                <span class="products-element__name" >${name}</span>
                <span class="products-element__price" >$ ${price}</span>
                <button class="products-element__button ${activeClass}" onclick='productsPage.handleSetLocationStorage(this, "${id}");'>
                <i class='bx bx-cart'></i>
                ${activeText}
                </button>
            </li>
            `;
    });

    const html = `
        <div class="products-container-bg">

            <h2 class="products-element__title">More than a collectible</h2>
            <p class="products-element__subtitle">Have all the characters</p>

        <ul class="products-container">
        ${htmlCatalog}
        </ul>
        <div class="products-container__btn">
              <button class="products-element__btn">See all products</button>
            </div>
        </div>
            `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
