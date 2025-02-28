import css from "../hw1/Transactions.module.css";
import transactions from "./transactions.json";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
            return (
                <tr key={id}>
                    <td className={css.tableTitle}>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr> 
            )
        })}
      </tbody>
    </table>
  );
};

export const TransactionApp = () => {
    return (
        <>
        <TransactionHistory items={transactions} />
        </>
    )
};
