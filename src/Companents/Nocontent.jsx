import React from "react";

const Nocontent = () => {
  return (
    <section className="nocontent-section">
      <div className="container nocontent-content">
        <h1 className="nocontent-title">😕</h1>
        <h3 className="nocontent-subtitle">No Definitions Found</h3>
        <p className="nocontent-description">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </section>
  );
};

export default Nocontent;
