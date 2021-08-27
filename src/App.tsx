import { HashRouter } from 'react-router-dom';
import s from './App.module.css';
import { Login } from './features/auth/login/Login';
import { PasswordRecovery } from './features/auth/passwordRecovery/PasswordRecovery';
import { Registration } from './features/auth/register/Registration';
import { Header } from './main/iu/header/Header';
import { Routes } from './main/iu/routes/Routes';

export const App = () => {
  return (
    <div className={s.App}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        {/* <Routes/> */}
        < PasswordRecovery/>
      </HashRouter>
      
    </div>
  );
}

