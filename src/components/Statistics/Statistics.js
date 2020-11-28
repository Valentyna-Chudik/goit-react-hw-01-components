import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import randomBgColor from './randomBgColor';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: randomBgColor() }}
          >
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
