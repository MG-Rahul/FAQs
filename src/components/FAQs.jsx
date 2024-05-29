/* eslint-disable no-unused-vars */
import React from "react";

import { faqDataList } from "./data";
import style from "./FAQs.module.css";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className={style.container}>
      <h1>FAQs</h1>
      {faqDataList.map((item, index) => {
        return <FAQ key={index} {...item} />;
      })}
    </section>
  );
};

export default FAQs;
