class Header {
   handlerOpenShoppingPage(){
    ShoppingPage.render();
   };

   handleOpenMenu(){
    const button = document.querySelector('#buton');
    button.classList.toggle('change');

    const navBar = document.querySelector('.navbar-element__ul');
    navBar.classList.toggle('active');

    const seachBox = document.querySelector('.header-search');
    seachBox.classList.toggle('active')

    const bgMenu = document.querySelector('.header-element__bg');
    bgMenu.classList.toggle('active');

    const body = document.querySelector('body')
    body.classList.toggle('active');
    
   };

   handleSeach(query){
    return CATALOG.filter(CATALOG => CATALOG.name.includes(query.toLowerCase()));
   }

  render(count) {
    const html = `
        <div class="header-container">

        <div class="header-img">
        <img class="header-element__img" src="img/logo.png"/>
        </div>

        <nav class="header-navbar">
        <ul class="navbar-element__ul">
            <li><a href="#">Products</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Brands</a></li>
        </ul>
        </nav>

        <div class="header-search">
        <i class='bx bx-search-alt-2' onclick=""></i>
        <input type="search" placeholder="Search.."/>
        </div>

        <div class="header-icon">
        <div class="header-element__bg"></div>
        <i class='bx bx-user-circle'></i>
        <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
        <i class='bx bx-cart' ></i>
        ${count}
        </div>
        <div>

        <div class="header-container__menu" id="buton" onclick="headerPage.handleOpenMenu()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>

        </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();


