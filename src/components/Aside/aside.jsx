import React from "react";
import "./style.css";
import FeedbackButton from "../Button/feedbackButton/feedbackButton";
import LoadingButton from "../Button/loadingButton/loadingButton";

const Aside = () => {
  return (
    <aside className={`page-aside`}>
      <div className="aside-top">
        <FeedbackButton />
        <LoadingButton />
      </div>

      <div className="aside-content">
        <img src="../../../public/icon/home.svg" alt="homeSvg" className="aside-icon" />
        <p>Предоставление сведений, содержащихся в отчетах о недвижимости</p>
      </div>

      <div className="aside-content">
        <img src="../../../public/icon/home.svg" alt="homeSvg" className="aside-icon" />
        <p>Юридическая консультация</p>
      </div>

      <div className="aside-advertisement">
        <p>Здесь может быть ваша реклама</p>
      </div>

      <div className="aside-info">
        <h1>Информационный центр:</h1>
        <ul>
          <li>Страховой случай</li>
          <li>Отзывы</li>
          <li>Купить юр лиды</li>
          <li>О нас</li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
