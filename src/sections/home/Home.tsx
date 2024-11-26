import "./style.sass";

import Socials from "./components/Socials/Social";
import Data from "./components/Data/Data";
import ScrollDown from "./components/ScrollDown/ScrollDown";

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Socials />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
