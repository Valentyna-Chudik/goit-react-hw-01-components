import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <Fragment>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </Fragment>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
