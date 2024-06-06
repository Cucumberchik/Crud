import { NextPage } from "next";
import { ReactNode } from "react";

interface CardComponentType {
  style: any;
  data: CardType;
}

const Card: NextPage<CardComponentType> = ({ style, data }): ReactNode => {
  return (
    <div className={style.card}>
      <div className={style.card_title}>
        <h4>Header</h4>
      </div>
      <div className={style.card_desc}>
        <p>Description</p>
      </div>
      <div className={style.card_buttons}>
        <button className={style.change}>Change</button>
        <button className={style.delete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
