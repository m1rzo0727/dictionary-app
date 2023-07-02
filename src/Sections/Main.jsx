import React from "react";

const Main = () => {
  ;
  return (
    <section id="main-section">
      <header className="container main-header">
        <div className="main-header__text">
          <h2 className="main-header__word">Hello</h2>
          <p className="main-header__transcription">Hellllo</p>
        </div>
        <div className="main-header__play">
          <i class="fa-regular fa-circle-play"></i>
        </div>
      </header>
      <main className="container main-main">
        <div className="noun-box">
          <h5 className="noun-title">Noun</h5>
          <span className="noun-line"></span>
        </div>
        <h5 className="noun-subtitle">Meaining</h5>
        <ul className="noun-list">
          <li>
            <div className="noun-circle"></div>
          </li>
        </ul>
        <h5 className="noun-description">
          Synonyms:
          <a href="#" className="noun-description__link">
            sdsd
          </a>
        </h5>

        <div className="verb-box">
          <h5 className="verb-title">Verb</h5>
          <span className="verb-line"></span>
        </div>
        <h5 className="verb-subtitle">Meaining</h5>
        <ul className="verb-list">
          <li>
            <div className="verb-circle"></div>
          </li>
        </ul>
        <h5 className="verb-description">
          Source:
          <a href="#" className="verb-description__link">
            sdsd
          </a>
        </h5>
      </main>
      <footer id="main-footer">
        <h1 className="footer-title">
          Powered by:
          <a className="footer-title__link" href="https://t.me/m1rzo_dev">
            m1rzo_dev
          </a>
        </h1>
      </footer>
    </section>
  );
};

export default Main;
