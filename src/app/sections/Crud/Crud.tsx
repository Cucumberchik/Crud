import { NextPage } from "next";
import { ReactNode } from "react";
import style from "./Crud.module.scss";

const Crud: NextPage = (): ReactNode => {
  return (
    <section className={style.crud}>
      <div className="container">
        <div className={style.contant}>
          <div className={style.head_title}>
            <h1>Crud</h1>
          </div>
          <div className={style.add_card}>
            <input type="text" placeholder="Найти.." />
            <button>Add card</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crud;
