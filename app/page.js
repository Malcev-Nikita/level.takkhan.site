import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";

const Home = () => (
  <div className="app">
    <header className="header">
      <div className="container">
        <HeaderLogo className="header__logo" />
      </div>
    </header>

    <section className="about">
      <div className="container">
        <div className="about__container">
          <div className="about__item">
            <h2 className="about__header">Немного о нас</h2>

            <div className="about__pros">
              <div className="about__pros_item">
                <p className="about__pros_header">20+</p>
                <p className="about__pros_subheader">Организованных мероприятия</p>
              </div>

              <div className="about__pros_item">
                <p className="about__pros_header">15</p>
                <p className="about__pros_subheader">Постоянных клиентов</p>
              </div>
            </div>
          </div>

          <div className="about__hr"></div>

          <div className="about__item">
            <p className="about__item_header">Агентство «LEVel» - БУдьте с нами на уровень выше!</p>
            <p className="about__item_subheader">
              Подготовка деловых мероприятий и их организация - это 60% успеха в достижение бизнес целей компании, только тщательно разработанный план, четкая организация и оперативное решение всех возникающих вопросов обеспечат успех инициатора, именно это мы гарантируем своим заказчикам.
            </p>
          </div>
        </div>

        <div className="about__images">
          {/* <Image src="/image/img/about1.png" alt="" width="100" height="100"/> */}
          <img src="/image/img/about1.png" alt="" />
          <img src="/image/img/about2.png" alt="" />
          <img src="/image/img/about3.png" alt="" />
        </div>
      </div>
    </section>

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

    <section className="portfolio-main">
      <div className="container">
        <h2 className="portfolio__header">Портфолио</h2>

        <p className="portfolio__subheader">то, чем мы гордимся</p>

        <div className="portfolio__content">
          <div className="portfolio__item">
            <img src="/image/img/portfolio1.png" alt=""/>

            <p>премия «предприниматель года»<span></span></p>
          </div>

          <div className="portfolio__item">
            <img src="/image/img/portfolio2.png" alt=""/>

            <p>Кибертурнир от «ростелеком»<span></span></p>
          </div>

          <div className="portfolio__item">
            <img src="/image/img/portfolio3.png" alt=""/>

            <p>МЕЖДУНАРОДНЫЙ БИЗНЕС КОНГРЕСС “НОВЫЕ ПРАВИЛА РОСТА” В САНКТ-ПЕТЕРБУРГЕ <span></span></p>
          </div>
        </div>

        <a className="services__button">Смотреть больше</a>
      </div>
    </section>

    <section className="team">
      <div className="container">
        <h2 className="team__header">Наша команда</h2>

        <p className="team__subheader">Те, кто создают ваши мероприятия</p>

        <div className="team__content">
          <div className="team__item">
            <img src="/image/img/team1.png" alt="" />

            <p className="team__item_fullname">чурсина мария</p>
            <p className="team__item_descr">совладелица агентства по организации бизнес-мероприятий «LEVEL»</p>
          </div>

          <div className="team__item">
            <img src="/image/img/team2.png" alt="" />

            <p className="team__item_fullname">Кузнецова Екатерина</p>
            <p className="team__item_descr">совладелица агентства по организации бизнес-мероприятий «LEVEL»</p>
          </div>
        </div>
      </div>
    </section>

    <section className="client">
      <div className="container">
        <h2 className="client__header">наши клиенты</h2>


        <div className="client__content">
          <div className="client__item">
            <img src="/image/icon/client1.svg" alt="" />
          </div>

          <div className="client__item">
            <img src="/image/icon/client2.svg" alt="" />
          </div>

          <div className="client__item">
            <img src="/image/icon/client3.svg" alt="" />
          </div>

          <div className="client__item">
            <img src="/image/icon/client4.svg" alt="" />
          </div>

          <div className="client__item">
            <img src="/image/icon/client5.svg" alt="" />
          </div>

          <div className="client__item">
            <img src="/image/icon/client6.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="contacts">
      <div className="container">
        <div className="contacts__item">
          <h2 className="contacts__header">Контакты</h2>

          <p className="contacts__descr">Свяжитесь с нами и мы организуем лучшее мероприятие для Вас</p>

          <div className="contacts__item">
            <p>Телефоны:</p>

            <div>
              <a href="tel:79608570375">+7 (960) 857-03-75</a>
              <a href="tel:79608558805">+7 (960) 855-88-05</a>
            </div>
          </div>

          <div className="contacts__item">
            <p>E-mail:</p>

            <div>
              <a href="mailto:agencylevel30@yandex.ru">agencylevel30@yandex.ru</a>
            </div>
          </div>

          <div className="contacts__item">
            <p>Соцсети:</p>

            <div>
              <a href="#">
                <img href="" alt="" />
              </a>

              <a href="#">
                <img href="" alt="" />
              </a>

              <a href="#">
                <img href="" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="contacts__item">
          
        </div>
      </div>
    </section>
  </div>
);

export default Home;