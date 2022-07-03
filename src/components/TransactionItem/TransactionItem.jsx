import PropTypes from 'prop-types';
import style from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={style.row}>
      <td className={style.cell}>{type}</td>
      <td className={style.cell}>{amount}</td>
      <td className={style.cell}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
