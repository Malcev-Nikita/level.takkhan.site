import HeaderLogo from "@/components/HeaderLogo";

const Home = () => (
  <div className="app">
    <header className="header">
      <div className="container">
        <HeaderLogo className="header__logo" />
      </div>
    </header>

    <section className="services">
      <div className="container">
        <h2 className="services__header">наши услуги</h2>

        <div className="services__content">
          <div className="services__item">
            <p className="services__item_header">Форумы и слеты</p>

            <p className="services__item_description">
              Помогаем собраться, обменяться практическим опытом и решать глобальные проблемы
            </p>
          </div>

          <div className="services__item">
            <p className="services__item_header">Тимбилдинги</p>

            <p className="services__item_description">
              Продвигаем умное и эффективное командообразование
            </p>
          </div>

          <div className="services__item">
            <p className="services__item_header">Бизнес-мероприятия</p>

            <p className="services__item_description">
              Организуем любые конференции, презентации, круглые столы, форумы, семинары, встречи.
            </p>
          </div>

          <div className="services__item">
            <p className="services__item_header">Официальные события</p>

            <p className="services__item_description">
              Любые события, связанные с жизнью компании: день рождения фирмы, презентация новых товаров, услуг, награждение сотрудников.
            </p>
          </div>

          <div className="services__item">
            <p className="services__item_header">Корпоративные события</p>

            <p className="services__item_description">
              Занимаемся организацией мероприятий, связанных с жизнью компании
            </p>
          </div>

          <a className="services__button">Оставить заявку</a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;