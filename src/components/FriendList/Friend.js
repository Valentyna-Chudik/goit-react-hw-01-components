import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styles from './Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </Fragment>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
