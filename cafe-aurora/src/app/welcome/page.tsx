'use client';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';  // CSS Module para welcome

export default function WelcomePage() {
  const { user } = useUser();
  const router = useRouter();

  // Si no hay usuario, redirige al login
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) return null;  // Previene render si está redirigiendo

  return (
    <main className={styles.container}>
      <h1>¡Hola, {user.name}!</h1>
      <p>Gracias por ser parte de Café Aurora.</p>
      <p>Tu número de membresía es: {user.membership}</p>
      <img 
        src="https://i.pinimg.com/736x/ff/33/55/ff33554c64048a5ff64c4f60a0fbce80.jpg" 
        alt="Café Aurora" 
        className={styles.image} 
      />
      <img 
        src="https://i.pinimg.com/originals/32/79/19/32791903530391481.jpg" 
        alt="Nueva Imagen Café Aurora" 
        className={styles.centeredImage} 
      />
    </main>
  );
}