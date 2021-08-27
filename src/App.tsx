import s from './App.module.css';
import { Login } from './features/auth/login/Login';
import { Registration } from './features/auth/register/Registration';

export const App = () => {
  return (
    <div className={s.App}>
      <Registration/>
    </div>
  );
}

