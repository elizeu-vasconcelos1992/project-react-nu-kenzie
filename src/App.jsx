import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalValue from "./components/TotalValue";
import InicialPage from "./components/InicialPage";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(true);
  const [list, setList] = useState([]);
  const [validation, setValidation] = useState("all");

  function filterRemove(remove) {
    const removed = transactions.filter((item) => item.id !== parseInt(remove));
    setTransactions(removed);
  }

  function swapPage(data) {
    setPage(data);
  }

  useEffect(() => {
    const newlist = transactions.filter((item) => item.type === validation);
    setList([...newlist]);
  }, [transactions, validation]);

  if (page) {
    return (
      <div className="App">
        <InicialPage swapPage={swapPage} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App__header">
          <Header swapPage={swapPage} />
        </header>
        <main className="App__main">
          <div className="App_main--form">
            <Form
              transactions={transactions}
              setTransactions={setTransactions}
            />
            <TotalValue transactions={transactions} />
          </div>
          <div>
            <List
              listTransactions={transactions}
              remove={filterRemove}
              validation={validation}
              setValidation={setValidation}
              list={list}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
