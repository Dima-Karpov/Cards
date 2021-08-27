import s from './App.module.css';
import { Login } from './features/auth/login/Login';

export const App = () => {
  return (
    <div className={s.App}>
      <Login/>
    </div>
  );
}

