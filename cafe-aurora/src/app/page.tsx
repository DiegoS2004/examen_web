'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import styles from './page.module.css';  // CSS Module

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const router = useRouter();

  // Usuarios hardcodeados
  const users = [
    { username: 'sandra.g', password: 'latte123', name: 'Sandra García', membership: 5001 },
    { username: 'roberto.m', password: 'capuccino456', name: 'Roberto Martínez', membership: 5002 },
    { username: 'esteban.l', password: 'espresso789', name: 'Esteban López', membership: 5003 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser({ name: foundUser.name, membership: foundUser.membership });
      router.push('/welcome');
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <main className={styles.container}>
      <h1>Portal de Café Aurora</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </main>
  );
}
