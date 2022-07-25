import { useState } from "react";
import "./style.css";

function Form({ transactions, setTransactions }) {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectType, setSelectType] = useState("Entrada");

  const inputTransactions = () => {
    return {
      description: inputDescription,
      type: selectType,
      value: inputValue,
    };
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Descrição{" "}
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setInputDescription(event.target.value)}
        />{" "}
        <span>Ex.: Compra de roupas</span>
      </label>
      <div>
        <label>
          Valor{" "}
          <input
            type="text"
            placeholder="R$"
            onChange={(event) => setInputValue(event.target.value)}
          />{" "}
        </label>
        <label>
          Tipo de Valor{" "}
          <select
            value={selectType}
            onChange={(event) => setSelectType(event.target.value)}
          >
            {" "}
            <option value="Entrada">Entrada</option>{" "}
            <option value="Saída">Saída</option>{" "}
          </select>
        </label>
      </div>
      <button
        type="submit"
        onClick={() => setTransactions([...transactions, inputTransactions()])}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
