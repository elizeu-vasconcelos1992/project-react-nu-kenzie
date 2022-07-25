import "./style.css";

function TotalValue({ transactions }) {
  if (transactions.length > 0) {
    const totalValue = transactions.reduce((acc, cur) => {
      if (cur.type === "Entrada") {
        return acc + parseInt(cur.value);
      } else {
        return acc - parseInt(cur.value);
      }
    }, 0);
    return (
      <div className="totalMoney">
        <p className="totalValue">
          Valor Total: <span className="totalValue__span">R$ {totalValue}</span>
        </p>
        <p className="descriptionValue">O valor se refere ao saldo</p>
      </div>
    );
  }
}

export default TotalValue;
