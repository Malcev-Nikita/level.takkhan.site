import Logo from "./Logo";

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer__block">
                <h4 className="text-regular">© Все права защищены. LEVEL, 2023.</h4>
                <h5 className="text-regular">Разработка и поддержка сайта: Коммуникационное агентство «Такхан»</h5>
            </div>

            <a className="footer__block" href="/"><Logo /></a>
        </div>
    </footer>
);

export default Footer;