import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </Fragment>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
