import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Tree } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';

import api from '../services/api';

import { useQuestionsContext } from '../contexts/QuestionsContext';
import styles from '../styles/Questions.module.css';
import Header from '../components/Header';
import LoadingCard from '../components/LoadingCard';

type Topic = {
  id: number,
  name: string,
  questions: string,
}

type TopicsList = Topic[];

function Questions () {
  const [topics, setTopics] = useState([] as TopicsList);
  const [isLoading, setIsLoading] = useState(true);
  const { agencyId, examinatorId } = useQuestionsContext();
  const history = useHistory();

  async function getTopics() {
    const { data } = await api.get(`/examinators/${examinatorId}/agencies/${agencyId}/topics`);
    setTopics(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (agencyId === -1 || examinatorId ===-1) return history.push('/');
    getTopics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const treeChildren = ;

  const treeData = topics.map((topic) => ({
    title: topic.name,
    key: topic.id,
    icon: <CarryOutOutlined />,
    children: topic.questions.split('.')
      .map((item, index) => ({
        title: item,
        key: index + (Math.random() * 2000000)
      }))
  }))
  
  return (
    <>
      <Header />
      {isLoading 
        ? <LoadingCard />
        : (
          <main className={styles.container}>
          {topics.map((topic, index) => (
            <Card
            key={topic.id}
            title={`Assunto: ${topic.name}`}
            bordered={false}
            style={{boxShadow: '2px 2px 10px #ddd', borderRadius: 3}}
            >
              <h4>{topic.questions.split(' ').length} Questões disponíveis</h4>
              <Tree showLine treeData={treeData.filter((item) => item.key === topic.id)} />
              {/* onSelect={onSelect}  */}
            </Card>
          ))}
          {/* {topics.map((topic)=> <Card key={topic.id} data={topic} />)} */}
          </main>
        )
      }
    </>
  )
}

export default Questions;