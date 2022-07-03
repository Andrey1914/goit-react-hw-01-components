import PropTypes from 'prop-types';
import style from '../StatisticsItem/StatisticsItem.module.css';

export default function StatisticsItem({ statItem }) {
  const type = statItem.label.slice(1);

  return (
    <li className={style[type]}>
      <span className={style.label}>{statItem.label}</span>
      <span className={style.percentage}>{statItem.percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  statItem: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
