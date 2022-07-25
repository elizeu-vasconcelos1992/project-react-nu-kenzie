import "./style.css";
import trash from "../../assets/trash.svg";
import card from "../../assets/NoCard.svg";
import { useState } from "react";

function List({ listTransactions, remove }) {
  const [listEntree, setListEntree] = useState([]);
  const [listExpense, setListExpense] = useState([]);
  const [validation, setValidation] = useState("all");

  function filterEntree() {
    const newEntree = listTransactions.filter(
      (item) => item.type === "Entrada"
    );
    setListEntree([...newEntree]);
    setValidation("entree");
  }

  function filterExpense() {
    const newExpense = listTransactions.filter((item) => item.type === "Saída");
    setListExpense([...newExpense]);
    setValidation("expense");
  }

  function listAll() {
    if (validation === "all") {
      return listMap(listTransactions);
    }
    if (validation === "entree") {
      return listMap(listEntree);
    }
    if (validation === "expense") {
      return listMap(listExpense);
    }
  }

  function listMap(data) {
    return data.map((item, index) => (
      <li key={index} className="list__transactions">
        {item.type === "Entrada" ? (
          <div className="list__transactions--tag--1"></div>
        ) : (
          <div className="list__transactions--tag--2"></div>
        )}
        <div className="list__transactions--description">
          <h4> {item.description}</h4>
          <span>{item.type}</span>
        </div>
        <div className="list__transactions--value">
          <span>
            {" "}
            {`${parseInt(item.value).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}`}
          </span>
          <figure>
            <img
              src={trash}
              alt="lixo"
              onClick={(event) =>
                remove(
                  event.target.parentElement.parentElement.parentElement
                    .childNodes[1].firstChild.innerText
                )
              }
            />
          </figure>
        </div>
      </li>
    ));
  }

  return (
    <div className="transactions">
      <nav>
        <h3>Resumo Financeiro</h3>
        <div className="nav__buttons">
          <button
            className="nav__buttons_all"
            onClick={() => setValidation("all")}
          >
            Todos
          </button>
          <button onClick={() => filterEntree()}>Entrada</button>
          <button onClick={() => filterExpense()}>Despesas</button>
        </div>
      </nav>
      <ul className="list">
        {listTransactions.length > 0 ? (
          listAll()
        ) : (
          <img src={card} alt="card vazio" />
        )}
      </ul>
    </div>
  );
}

export default List;
