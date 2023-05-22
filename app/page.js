import client from "@/contentful";
import HeaderLogo from "@/components/HeaderLogo";

const Home = () => (
  <section className="header">
    <div className="container">
      <HeaderLogo className="header__logo" />
    </div>
  </section>
);

export default Home;