import { NextPage } from "next";
import { ReactNode } from "react";
import style from "./CrudCards.module.scss";
import Card from "@/components/Card/Card";

const CrudCards: NextPage = (): ReactNode => {
  const data: CardType[] = [
    { title: "First Crud", desc: "hello hello hello", _id: 3 },
  ];
  

  return (
    <section className={style.crud_cards}>
      <div className="container">
        <div className={style.contant}>
          {data.map((el: CardType, idx: number) => (
            <Card
              key={idx}
              style={style}
              data={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrudCards;
