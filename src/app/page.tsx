"use server";
import { NextPage } from "next";
import { ReactNode } from "react";
import style from "@/styles/page.module.scss";
import Crud from "./sections/Crud/Crud";
import CrudCardsLayout from "./sections/CrudCards/CrudCardsLayout";

const Home: NextPage = (): ReactNode => {
  return (
    <main className={style.main}>
      <Crud />
      <CrudCardsLayout />
    </main>
  );
};

export default Home;
