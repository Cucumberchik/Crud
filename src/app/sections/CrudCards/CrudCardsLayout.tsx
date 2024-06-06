"use client";
import useCrud from "@/zustands/crud";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import CrudCards from "./CrudCards";
import CardModal from "@/components/CardModal/CardModal";

const CrudCardsLayout: NextPage = (): ReactNode => {
  const [card, setCard] = useState<SubmitCardType>({ title: "", desc: "" });
  const [idCard, setIdCard] = useState<number>(NaN);
  const [changeCard, setChangeCard] = useState<SubmitCardType>({
    title: "",
    desc: "",
  });
  const {
    data,
    statusAddModal,
    statusChangeModal,
    handleDelete,
    setStatusAddModal,
    setStatusChangeModal,
    changeCardFunc,
    getData,
    addCard,
  } = useCrud();

  useEffect(() => {
    getData();
  }, []);

  const handleSubmitCard = () => {
    if (!card.desc || !card.desc) return;

    addCard(card);
    setCard({ title: "", desc: "" });
    setStatusAddModal(false);
  };

  const handleChangeCard = () => {
    if (!changeCard.desc || !changeCard.desc) return;

    changeCardFunc(changeCard, idCard);
    setChangeCard({ title: "", desc: "" });
    setStatusChangeModal(false);
  };

  const handleOpenModalChangeCard = (_id: number) => {
    const card: any = data.find((el: CardType) => el._id === _id);
    setIdCard(_id);

    setChangeCard({ title: card?.title, desc: card?.desc });
    setStatusChangeModal(true);
  };

  return (
    <>
      <CardModal
        title="Add"
        setStatus={setStatusAddModal}
        status={statusAddModal}
        setValueInputs={setCard}
        valueInputs={card}
        handleSubmitValue={handleSubmitCard}
      />
      <CardModal
        title="Change"
        setStatus={setStatusChangeModal}
        status={statusChangeModal}
        setValueInputs={setChangeCard}
        valueInputs={changeCard}
        handleSubmitValue={handleChangeCard}
      />
      <CrudCards
        handleDelete={handleDelete}
        handleOpenModalChangeCard={handleOpenModalChangeCard}
        data={data}
      />
    </>
  );
};

export default CrudCardsLayout;
