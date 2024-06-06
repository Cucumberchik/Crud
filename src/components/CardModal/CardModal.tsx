import { NextPage } from "next";
import { Dispatch, ReactNode, SetStateAction } from "react";
import style from "./CardModal.module.scss";

interface AddCardModalType {
  setStatus: (status: boolean) => void;
  status: boolean;
  setValueInputs: Dispatch<SetStateAction<SubmitCardType>>;
  valueInputs: SubmitCardType;
  handleSubmitValue: () => void;
  title: string;
}

const CardModal: NextPage<AddCardModalType> = ({
  status,
  setStatus,
  valueInputs,
  setValueInputs,
  handleSubmitValue,
  title,
}): ReactNode => {
  return (
    <section
      id={style.modal}
      onClick={() => setStatus(false)}
      className={status ? style.modal_active : style.modal_disible}>
      <div
        className={style.contant}
        onClick={(e) => e.stopPropagation()}>
        <h2>{title} card</h2>
        <input
          type="text"
          placeholder="Title.."
          value={valueInputs.title}
          onChange={({ target }) =>
            setValueInputs({ ...valueInputs, title: target.value })
          }
        />
        <textarea
          id="story"
          name="story"
          rows={15}
          onChange={({ target }) =>
            setValueInputs({ ...valueInputs, desc: target.value })
          }
          value={valueInputs.desc}
        />
        <div className={style.modal_buttons}>
          <button
            onClick={() => setStatus(false)}
            className={style.consel}>
            Consel
          </button>
          <button
            onClick={handleSubmitValue}
            className={style.add}>
            {title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardModal;
