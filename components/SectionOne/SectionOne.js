class SectionOne {
  
  render() {

    const html = `
        <div class="sectionOne-container">

        <div class="sectionOne-container__info">
        <h2 class="sectionOne-element__title">
            Bring your favorite sorcerers home
        </h2>
        <p class="sectionOne-element__subtitle">
            At FunkoMania you have fun and start your amazing collection of Funkos!
        </p>
        <div>
        <button class="sectionOne-element__button">Shop Now</button>
        </div>
        </div>

        <div class="sectionOne-container__person">
        <img src="img/section-one/person.png" alt="photo"/>
        </div>

        </div>
        `;

    ROOT_SECTIONONE.innerHTML = html; 
  }
  
}


const sectionOnePage = new SectionOne();

