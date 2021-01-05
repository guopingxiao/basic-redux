import React from "react";
import styles from './MenuList.module.css'

interface Props {
  value: string;
  onChange: (value:string) => void;
  options: string[];
}

const MenuList = ({ value, onChange, options }:Props) => (
  <div className={styles.menuList}>
    {options.map(option => (
      <h3
        key={option}
        onClick={() => onChange(option)}
        className={option === value ? styles.selected : ''}
      >
        {option}
      </h3>
    ))}
  </div>
);

export default MenuList;
