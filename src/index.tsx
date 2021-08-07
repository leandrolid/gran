import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Routes />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
