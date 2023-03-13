function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  sectionOnePage.render();
  sectionTwoPage.render();
  sectionThreePage.render();
  productsPage.render();
}

let CATALOG = [];

fetch('/server/catalog.json')
  .then(res => res.json())
  .then(body => {
        CATALOG = body;
        render();
  })
  .catch(error => {
    console.log(error);
  });
