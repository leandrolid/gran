import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Select } from 'antd';

import styles from '../styles/Form.module.css';

type Examinator = {
  id: number,
  name: string,
}

type Agency = {
  id: number,
  name: string,
}

type FormProps = {
  examinators: Examinator[],
  agencies: Agency[],
  changeExaminator: (param: number) => void,
  changeAgency: (param: number) => void,
  agencyId: number
}

function Form ({examinators, agencies, changeExaminator, changeAgency, agencyId}: FormProps) {
  const [shouldDisplayAgencies, setShouldDisplayAgencies] = useState(false);
  const [shouldDisplayButton, setShouldDisplayButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  useEffect(() => {
    if (agencies.length > 0) setShouldDisplayAgencies(true);
  }, [agencies])
  
  useEffect(() => {
    if (agencyId !== -1) setShouldDisplayButton(true);
    if (Number(agencyId) === -1) setShouldDisplayButton(false);
  }, [agencyId])

  function handleClick(){
    setIsLoading(true);
    history.push('/plans');
    setShouldDisplayButton(false);
  }

  return (
    <form className={styles.container}>
      {/* <select name="examinator" id="examinator" onLoad={changeExaminator} onChange={changeExaminator}>
        <option value={-1}></option>
        {examinators.map((item)=> (<option key={item.id} value={item.id}>{item.name}</option>))}
      </select> */}
      <Select
          showSearch
          placeholder="Selecione uma banca"
          optionFilterProp="children"
          onChange={changeExaminator}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {examinators.map((item)=> (
            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
          ))}
        </Select>

      {shouldDisplayAgencies
      && <Select
          showSearch
          placeholder="Selecione um órgão"
          optionFilterProp="children"
          onChange={changeAgency}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {agencies.map((item)=> (
            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
          ))}
        </Select>

        // <select name="examinator" id="examinator" onChange={changeAgency}>
        //    <option value={-1}></option>
        //    {agencies.map((item)=> (<option key={item.id} value={item.id}>{item.name}</option>))}
        //  </select>
         }

      {shouldDisplayButton && 
        <Button type="primary" loading={isLoading} onClick={handleClick}>
          Ver programas
        </Button>
        // <button type="button" onClick={handleClick}>Ver programas</button>
      }
    </form>
    )
}

export default Form;