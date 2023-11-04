import React from 'react';
import styles from './Search.module.scss';
import searchIc from '../../img/icons/SearchIC.svg';
import Button from '../Button/Button';

export const Search = () => {
  return (
    <div className={styles.wrap_search}>
      <div className={styles.wrap_input}>
        <img className={styles.ic_search} src={searchIc} />
        <input
          type="text"
          className={styles.input}
          placeholder="Введите название секции или кружка"
        />
      </div>
      <button className={styles.bt_search}>Найти</button>
    </div>
  );
};

