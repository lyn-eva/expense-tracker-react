import Table from "./UI/Table";

function ExpenseList(props) {
   console.log(props.expenseList)
   return <Table expList={props.expenseList} />;
}

export default ExpenseList;
