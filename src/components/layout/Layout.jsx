import { Link } from 'react-router-dom';
import s from './Layout.module.css';

export function Layout({ title, children, footer }) {
    return (
      <div className={s.layout}>
        <header className={s.layout__header}>
          <Link to='/'>{title}</Link>
          <Link to="/login">Skrá inn</Link>
        </header>
        <main className={s.layout__main}>
          {children}
        </main>
        <footer className={s.layout__footer}>{footer}</footer>
      </div>
    )
  }