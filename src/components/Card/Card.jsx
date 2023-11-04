import React from 'react';
import styles from './Card.module.scss';
import { Button } from '../Button/Button';
import vector2 from '../../img/vector2.svg';
import vector from '../../img/Vector.svg';
import vector1 from '../../img/vector1.svg';

export const Card = () => {
  const windowWidth = window.screen.width;

  if (windowWidth > 595) {
    return (
      <div className={styles.wrap_big}>
        <div>
          <h1 className={styles.text_big}>
            Узнай какое занятие <br /> подойдет вашему ребёнку
          </h1>
          <Button>Узнать</Button>
        </div>
        <div className={styles.vector_wrap}>
          <img className={styles.vector_1} src={vector2} />
          <img className={styles.vector_2} src={vector} />
          <img className={styles.vector_3} src={vector} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrap_small}>
        <h1 className={styles.text_small}>
          <span className={styles.gray_text}>Узнай какое занятие</span> подойдет
          вашему ребёнку
        </h1>
        <img className={styles.profile_vector} src={vector1} />
      </div>
    );
  }
};
