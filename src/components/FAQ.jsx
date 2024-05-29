/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import style from "./FAQ.module.css";

const FAQ = ({ id, title, desc }) => {
  const [togole, setTogole] = useState(false);
  return (
    <article className={style.container}>
      <div className={style.box}>
        <h3>{title}</h3>
        <button className={style.btn} onClick={() => setTogole(!togole)}>
          {togole ? "-" : "+"}
        </button>
      </div>
      {togole && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
