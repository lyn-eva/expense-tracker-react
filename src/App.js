import styles from "./App.module.css";

import { useState } from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

function App() {
   const [expList, setExpList] = useState([]);

   const updateList = (Datte, Detail, Amount) => {
      setExpList((prevList) => [
         ...prevList,
         { date: Datte, detail: Detail, amount: Amount },
      ]);
   };

   return (
      <Container className={styles.ctr}>
         <h1>EXPENSE TRACKER</h1>
         <Form updateList={updateList} />
         <hr />
         <ExpenseList expenseList={expList}/>
      </Container>
   );
}

export default App;
