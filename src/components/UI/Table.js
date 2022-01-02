import styles from "./Table.module.css";

function Table(props) {
   return (
      <table>
         <thead>
            <tr>
               <th>Date</th>
               <th>Description</th>
               <th>Amount</th>
            </tr>
         </thead>
         <tbody>
            {props.expList.map((item, i) => (
               <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.detail}</td>
                  <td>{`${item.amount}$`}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default Table;
