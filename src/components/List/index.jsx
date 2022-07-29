import "./style.css";
import trash from "../../assets/trash.svg";
import card from "../../assets/NoCard.svg";

function List({ listTransactions, remove, validation, setValidation, list }) {
  function listAll() {
    if (validation === "all") {
      return listMap(listTransactions);
    }
    if (validation !== "all") {
      return listMap(list);
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
              id={item.id}
              onClick={(event) => remove(event.target.id)}
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
          <button onClick={() => setValidation("all")}>Todos</button>
          <button onClick={() => setValidation("Entrada")}>Entrada</button>
          <button onClick={() => setValidation("Saída")}>Despesas</button>
        </div>
      </nav>
      <ul className="list">
        {(listTransactions.length > 0 && validation === "all") ||
        (list.length > 0 && validation === "Entrada") ||
        (list.length > 0 && validation === "Saída") ? (
          listAll()
        ) : (
          <>
            <h3>Você ainda não possui nenhum lançamento</h3>
            <img src={card} alt="card vazio" />
          </>
        )}
      </ul>
    </div>
  );
}

export default List;
