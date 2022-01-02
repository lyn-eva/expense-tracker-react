import { useState } from "react";
import InputBox from "./UI/InputBox";
import Button from "./UI/Button";
import React from "react";

function Form(props) {
   const [expense, setExpense] = useState("");
   const [amount, setAmount] = useState("");
   const [date, setDate] = useState("");
   const [valExpense, setValExpense] = useState({ cond: true, msg: "" });
   const [valAmount, setValAmount] = useState({ cond: true, msg: "" });
   const [valDate, setValDate] = useState({ cond: true, msg: "" });

   const onSubmitHandler = (e) => {
      e.preventDefault();
      if (expense.trim() == "" || amount.trim() == "" || date == "") {
         setValExpense({ cond: false, msg: "can't be empty" });
         setValAmount({ cond: false, msg: "can't be empty" });
         setValDate({ cond: false, msg: "can't be empty" });
         return;
      }
      if (isNaN(amount) || +amount < 0) {
         return setValAmount({ cond: false, msg: "mustn't smaller than 0" });
      }
      props.updateList(date, expense, amount);
      setExpense("");
      setAmount("");
      setValExpense({ cond: true, msg: "" });
      setValAmount({ cond: true, msg: "" });
      setValDate({ cond: true, msg: "" });
   };

   const onExpenseHandler = (e) => {
      setExpense(e.target.value);
   };
   const onAmountHandler = (e) => {
      setAmount(e.target.value);
   };
   const onDateHandler = (e) => {
      setDate(e.target.value);
   };

   return (
      <form onSubmit={onSubmitHandler}>
         <InputBox
            className={valExpense.cond || "error"}
            errorMsg={valExpense.cond || valExpense.msg}
            value={expense}
            setValue={onExpenseHandler}
            type="text"
            label="Add expense"
            placeholder="expense"
         />
         <InputBox
            className={valAmount.cond || "error"}
            errorMsg={valAmount.cond || valAmount.msg}
            value={amount}
            setValue={onAmountHandler}
            type="text"
            label="Add amount $"
            placeholder="0.00$"
         />
         <InputBox
            className={valDate.cond || "error"}
            errorMsg={valDate.cond || valAmount.msg}
            value={date}
            setValue={onDateHandler}
            type="date"
            label="Add date"
            placeholder="mm/dd/yy"
         />
         <Button type="submit">Add</Button>
      </form>
   );
}

export default Form;
