import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Tables = props => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>Book table</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/:id`}>Edit booking</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>Add event</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/:id`}>Edit event</Link>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;
