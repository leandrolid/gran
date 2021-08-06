import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Home () {
  const [examinators, setExaminators] = useState([])

  async function getExaminators() {
    const { data } = await api.get('/examinators');
    setExaminators(data)
  }

  useEffect(() => {
    getExaminators();
  }, []);
  

  return (
    <>
      {examinators.map((examinator) => <div key={examinator.id}>{examinator.name}</div> )}
    </>
    )
}

export default Home;