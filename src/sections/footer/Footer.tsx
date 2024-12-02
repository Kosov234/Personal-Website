import "./style.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alexandr Cosov</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#recommendations" className="footer__link">
              Recommendations
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Kosov234"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Alexandr Cosov. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
