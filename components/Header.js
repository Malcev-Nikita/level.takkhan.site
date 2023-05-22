import Logo from "./Logo";

const Header = () => (
    <nav className="nav">
        <div className="container">
            <div className="logo"><Logo/></div>

            <ul className="nav__ul">
                <a href="#"><li>ГЛАВНАЯ</li></a>
                <a href="#"><li>О НАС</li></a>
                <a href="#"><li>УСЛУГИ</li></a>
                <a href="#"><li>ПОРТФОЛИО</li></a>
                <a href="#"><li>КЛИЕНТЫ</li></a>
                <a href="#"><li>КОНТАКТЫ</li></a>
            </ul>
        </div>
    </nav>
);

export default Header;