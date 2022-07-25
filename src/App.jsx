import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalValue from "./components/TotalValue";
import InicialPage from "./components/InicialPage";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(true);

  function filterRemove(remove) {
    const removed = transactions.filter((item) => item.description !== remove);
    setTransactions(removed);
  }

  function swapPage(data) {
    setPage(data);
  }

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
            <List listTransactions={transactions} remove={filterRemove} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
