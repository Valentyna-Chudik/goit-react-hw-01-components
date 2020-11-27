import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
  return (
    <Fragment>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </Fragment>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
