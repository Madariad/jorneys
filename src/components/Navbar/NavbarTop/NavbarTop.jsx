import "./style.css";

function NavbarTop() {
    return (
        <div className="NavbarTop">
            <ul>
                <li>
                    <a href="">
                      <img src="../../../../public/icon/home.svg" alt=""  style={{width: '30px'}} />
                        <span>Проверка обьекта недвижмости онлайн</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../../../public/icon/time.svg" alt="" style={{width: '30px'}} />
                        <span>Срочная доставка до 30 минут</span>
                    </a>
                </li>
                <li>
                    <a href="">
                       <img src="../../../../public/icon/mail.svg" alt=""  style={{width: '30px'}}/>
                        <span>Готовый отчет придет Вам на e-mail</span>
                    </a>
                </li>
            </ul>
            {/* <div className="navbarContent">
                <div className="">
                    <img src="../../../../public/icon/home.svg" alt=""  style={{width: '30px'}} />
                    <p>Проверка обьекта недвижмости онлайн</p>
                </div>
                <div className=""> 
                    <img src="../../../../public/icon/time.svg" alt="" style={{width: '30px'}} />
                    <p>Срочная доставка до 30 минут</p>
                </div>
                <div className="">
                    <img src="../../../../public/icon/mail.svg" alt=""  style={{width: '30px'}}/>
                    <p>Готовый отчет придет Вам на e-mail</p>
                </div>
            </div> */}
        </div>
    )
}
export default NavbarTop