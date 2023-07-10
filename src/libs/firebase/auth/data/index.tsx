import getFirebaseApp from '@libs/firebase';

import { browserSessionPersistence, getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useGoogleAuth = () => {
  const auth = getAuth(getFirebaseApp());
  auth.setPersistence(browserSessionPersistence);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  async function signIn() {
    auth.setPersistence(browserSessionPersistence);
    return signInWithGoogle();
  }

  return {
    signIn,
    user,
    loading,
    error,
  };
};

export default useGoogleAuth;
