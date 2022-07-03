import StatisticsItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics section">
      <div className="container">
        <div className={style.statisticsWrap}>
          {title && <h2 className={style.title}>{title}</h2>}

          <ul className={style.statList}>
            {stats.map(stat => (
              <StatisticsItem key={stat.id} statItem={stat} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
