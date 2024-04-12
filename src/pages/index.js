import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../services/firebase';
import { useEffect } from 'react';
import { LoginComponent } from '@/components/Login';
import { Content } from '@/components/app';

export default function Home() {

  return (
   <>
   <h1>Olá</h1>
   </>
  )
}