import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuestionsContext } from '../contexts/QuestionsContext';

import styles from '../styles/Header.module.css';



function Header () {
  const {setAgencyId, setExaminatorId } = useQuestionsContext();
  const history = useHistory();

  function handleClick() {
    setAgencyId(-1);
    setExaminatorId(-1);
    history.push('/');
  }

  return (
    <header className={styles.container}>
      <h1 onClick={handleClick}>Planner</h1>
    </header>
    )
}

export default Header;