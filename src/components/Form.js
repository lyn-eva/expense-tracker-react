import { useState, useRef } from "react";
import InputBox from "./UI/InputBox";
import Button from "./UI/Button";
import React from "react";

function Form(props) {
   const expenseRef = useRef();
   const amountRef = useRef();
   const dateRef = useRef();
   const [valExpense, setValExpense] = useState({ cond: true, msg: "" });
   const [valAmount, setValAmount] = useState({ cond: true, msg: "" });
   const [valDate, setValDate] = useState({ cond: true, msg: "" });

   const onSubmitHandler = (e) => {
      e.preventDefault();
      const expense = expenseRef.current.value;
      const amount = amountRef.current.value;
      const date = dateRef.current.value;
      if (expense.trim() === "" || amount.trim() === "" || date === "") {
         setValExpense({ cond: false, msg: "can't be empty" });
         setValAmount({ cond: false, msg: "can't be empty" });
         setValDate({ cond: false, msg: "can't be empty" });
         return;
      }
      if (isNaN(amount) || +amount < 0) {
         return setValAmount({ cond: false, msg: "mustn't smaller than 0" });
      }
      props.updateList(date, expense, amount);
      expenseRef.current.value = '';
      amountRef.current.value = '';
      dateRef.current.value = '';
      setValExpense({ cond: true, msg: "" });
      setValAmount({ cond: true, msg: "" });
      setValDate({ cond: true, msg: "" });
   };

   return (
      <form onSubmit={onSubmitHandler}>
         <InputBox
            Ref={expenseRef}
            className={valExpense.cond || "error"}
            errorMsg={valExpense.cond || valExpense.msg}
            type="text"
            label="Add expense"
            placeholder="expense"
         />
         <InputBox
            Ref={amountRef}
            className={valAmount.cond || "error"}
            errorMsg={valAmount.cond || valAmount.msg}
            type="text"
            label="Add amount $"
            placeholder="0.00$"
         />
         <InputBox
            Ref={dateRef}
            className={valDate.cond || "error"}
            errorMsg={valDate.cond || valAmount.msg}
            type="date"
            label="Add date"
            placeholder="mm/dd/yy"
         />
         <Button type="submit">Add</Button>
      </form>
   );
}

export default Form;
