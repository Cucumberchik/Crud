'use client'
import { NextPage } from "next";
import { ReactNode } from "react";
import style from "@/styles/page.module.scss";
import Crud from "./sections/Crud/Crud";
import CrudCards from "./sections/CrudCards/CrudCards";

const Home: NextPage = (): ReactNode => {
  const api = process.env.NEXT_PUBLIC_DB;
  console.log(api);
  return (
    <main className={style.main}>
      <Crud />
      <CrudCards />
    </main>
  );
};

export default Home;
