import Logo from "./Logo";

const Footer = () => (
    <footer>
        <div className="footer__block">
            <Logo />
        </div>

        <div className="footer__block">
            <h3>Сайт разработал ИНКОД </h3>
        </div>

        <div className="footer__block">
            <h4>Политика конфиденциальности</h4>
            <h4>© Все права защищены. level, 2023.</h4>
        </div>
    </footer>
);

export default Footer;