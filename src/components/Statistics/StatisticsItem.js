import PropTypes from 'prop-types';
import randomBgColor from './randomBgColor';
import styles from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <li className={styles.item} style={{ backgroundColor: randomBgColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
