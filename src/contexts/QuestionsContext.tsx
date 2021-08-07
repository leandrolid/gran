import { createContext, ReactNode, useContext, useState } from 'react';

type QuestionsContextData = {
  examinatorId: number,
  setExaminatorId: (param: number) => void,
  agencyId: number, 
  setAgencyId: (param: number) => void
}

type QuestionsContextProviderProps = {
  children: ReactNode,
}

export const QuestionsContext = createContext({} as QuestionsContextData);

export function QuestionsContextProvider({ children }: QuestionsContextProviderProps) {
  const [examinatorId, setExaminatorId] = useState(-1);
  const [agencyId, setAgencyId] = useState(-1);

  return <QuestionsContext.Provider value={{
    examinatorId,
    setExaminatorId,
    agencyId, 
    setAgencyId
  }}
  >
    {children}
  </QuestionsContext.Provider>;

}

export const useQuestionsContext = () => useContext(QuestionsContext);