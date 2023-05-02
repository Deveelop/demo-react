import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
    <h3>WELCOM!!!{props.users.map((user) => {
      return  <h1 key={Math.random()}>{user.email}</h1>
     })}</h3>
    </Card>
  );
};

export default Home;
