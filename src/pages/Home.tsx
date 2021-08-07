import React, { useEffect, useState } from 'react';

import api from '../services/api';
import Form from '../components/Form';
import { useQuestionsContext } from '../contexts/QuestionsContext';

import styles from '../styles/Home.module.css';

type Id = number;

function Home () {
  const [examinators, setExaminators] = useState([]);
  const [agencies, setAgencies] = useState([]);
  const { setExaminatorId, agencyId, setAgencyId } = useQuestionsContext();

  async function getExaminators() {
    const { data } = await api.get('/examinators');
    setExaminators(data)
  }
  
  async function getAgencies(id: Id) {
    const { data } = await api.get(`/examinators/${id}/agencies`);
    setAgencies(data);
  }

  function handleChangeExaminator(id: Id) {
    setExaminatorId(id);
    getAgencies(id);
  }

  function handleChangeAgency(id: Id) {
    setAgencyId(id);
  }

  useEffect(() => {
    getExaminators();
  }, []);
  
  return (
    <main className={styles.mainContainer}>
      <Form
        examinators={examinators}
        agencies={agencies}
        changeExaminator={handleChangeExaminator}
        changeAgency={handleChangeAgency}
        agencyId={agencyId}
      />
    </main>
    )
}

export default Home;