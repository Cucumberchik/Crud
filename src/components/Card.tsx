import { NextPage } from "next";
import { ReactNode } from "react";

interface CardComponentType {
  style: any;
  data: CardType;
  handleDelete: (_id: number) => void;
  handleOpenModalChangeCard: (_id: number) => void;
}

const Card: NextPage<CardComponentType> = ({
  style,
  data,
  handleDelete,
  handleOpenModalChangeCard,
}): ReactNode => {
  return (
    <div className={style.card}>
      <div className={style.card_title}>
        <h4>{data.title}</h4>
      </div>
      <div className={style.card_desc}>
        {data.desc.split("\n").map((item: string, idx: number) => (
          <p key={idx}>
            {item}
            <br />
          </p>
        ))}
      </div>
      <div className={style.card_buttons}>
        <button
          onClick={() => handleOpenModalChangeCard(data._id)}
          className={style.change}>
          Change
        </button>
        <button
          onClick={() => handleDelete(data._id)}
          className={style.delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
