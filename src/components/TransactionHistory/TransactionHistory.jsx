import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionsTable}>
        <thead className={styles.transactionHeader}>
          <tr className={styles.tableHeader}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.transactionsList}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={styles.transactionRow}>
                <td className={styles.transactionType}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
