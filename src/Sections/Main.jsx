import React from "react";

const Main = ({ word }) => {
  // console.log(word);

  const phonetic = word.phonetics.find((phone) => phone.audio && phone.text);

  const play = (e) => {
    const audio = new Audio(phonetic.audio);
    audio.play();
  };

  // let info = [];
  // let meanings = [];
  // // let definitions = [];

  // word.meanings.length > 0
  //   ? word.meanings.definitions.map((meaning, i) => {
  //       // meanings.push(meaning);
  //       console.log(meaning);
  //     })
  //   : null;

  // meanings.definitions.map((definition) => {
  //   console.log(definition);
  // });

  return (
    <section id="main-section">
      <header className="container main-header">
        <div className="main-header__text">
          <h2 className="main-header__word">{word.word}</h2>
          <p className="main-header__transcription">{phonetic.text}</p>
        </div>
        <div onClick={play} className="main-header__play">
          <i class="fa-regular fa-circle-play"></i>
        </div>
      </header>
      {word.meanings.length > 0
        ? word.meanings.map((mean, i) => (
            <main key={i} className="container main-main">
              <div className="noun-box">
                <h5 className="noun-title">{mean.partOfSpeech}</h5>
                <span className="noun-line"></span>
              </div>
              <h5 className="noun-subtitle">Meaining</h5>
              <ul className="noun-list">
                {mean.definitions.length > 0 &&
                  mean.definitions.map((definitions, i) => (
                    <li key={i}>
                      {/* <div className="noun-circle"></div> */}
                      <div className="flex flex-col">
                        <span>{definitions.definition}</span>
                        {definitions.example && (
                          <span className="text-[#757575]">
                            " {definitions.example}"
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                {mean.synonyms.length > 0 && (
                  <h5 className="noun-description">
                    Synonym:
                    <a key={i} className="noun-description__link">
                      {mean.synonyms[0]}
                    </a>
                  </h5>
                )}
              </ul>
            </main>
          ))
        : null}
      sss
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
