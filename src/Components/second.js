import style from '../CSS/second.module.css'

function Second() {
    return(
        <>
            <section id={`${style.second}`}>
                <div className={`${style.one}`}>
                    <div className={`${style.oneImg}`}></div>
                    <div className={`${style.oneWrap}`}> 
                        <p className={`${style.text}`}>
                            Lorem Ipsum is simply<br/>
                            dummy text of the printing and dummy text
                        </p>
                        <p className={`${style.textDetail}`}>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                                  industry. 
                        </p>
                    </div>
                </div>
                <div className={`${style.two}`}>
                    <p className={`${style.textTwo}`}>
                        dummy text of the printing and dummy
                    </p>
                    <p className={`${style.textTwoDetail}`}>
                        Lorem Ipsum is simply <span className={`${style.colorOrange}`}>dummy text</span> of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <p className={`${style.textTwoDetailMobile}`}>
                        Lorem Ipsum is simply <span className={`${style.colorOrange}`}>dummy text</span> of the<br/> 
                        printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
                        when an unknown
                    </p>
                </div>
                <div className={`${style.three}`}>
                    <div className={`${style.threeWrap}`}>
                        <div className={`${style.catOne}`}></div>
                        <div className={`${style.catTwo}`}></div>
                        <div className={`${style.catThree}`}></div>
                    </div>
                </div>
                <div className={`${style.four}`}>
                    <p className={`${style.fourText}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown<br/>
                        Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className={`${style.learnMore}`}>Learn More</button>
                </div>    
            </section>
        </>
    ) 
}

export default Second;