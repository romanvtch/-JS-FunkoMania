class SectionTwo {

    render(){

        const html = `
        <div class="sectionTwo-container">
            <div class="sectionTwo-container__img">
                <div id="one">
                    <img src="https://github.com/romanvtch/FunkoMania/blob/main/section-two/1.png?raw=true" alt="photo">
                </div>

                <div id="two">
                    <img src="https://github.com/romanvtch/FunkoMania/blob/main/section-two/2.png?raw=true" alt="photo">
                </div>

                <div id="three">
                    <img src="https://github.com/romanvtch/FunkoMania/blob/main/section-two/3.png?raw=true" alt="photo">
                </div>

                <div id="four">
                    <img src="https://github.com/romanvtch/FunkoMania/blob/main/section-two/4.png?raw=true" alt="photo">
                </div>

                <div id="five">
                    <img src="https://github.com/romanvtch/FunkoMania/blob/main/section-two/5.png?raw=true" alt="photo">
                </div>

            </div>
        <div>
        `
        ROOT_SECTIONTWO.innerHTML = html;  
    }
}

const sectionTwoPage = new SectionTwo();
