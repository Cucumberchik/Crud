import { NextPage } from "next";
import { ReactNode } from "react";
import style from "./CrudCards.module.scss";
import Card from "@/components/Card";

const CrudCards: NextPage<{
  data: CardType[];
  handleDelete: (_id: number) => void;
  handleOpenModalChangeCard: (_id: number) => void;
}> = ({ data, handleDelete, handleOpenModalChangeCard }): ReactNode => {
  return (
    <section className={style.crud_cards}>
      <div className="container">
        <div className={style.contant}>
          {data.map((el: CardType, idx: number) => (
            <Card
              key={idx}
              style={style}
              data={el}
              handleDelete={handleDelete}
              handleOpenModalChangeCard={handleOpenModalChangeCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrudCards;
