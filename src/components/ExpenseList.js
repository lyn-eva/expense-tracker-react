import Table from "./UI/Table";

function ExpenseList(props) {
   return <Table expList={props.expenseList} />;
}

export default ExpenseList;
