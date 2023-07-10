// import { ROUTES } from "@libs/router/data";
import { getAuth } from "firebase/auth";
// import { Navigate } from "react-router-dom";
import { useIdToken } from "react-firebase-hooks/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth();
  // const [user, loading, error] = useIdToken(auth);
  const [loading] = useIdToken(auth);

  if (loading) {
    return (
      <div>로그인 체크중...</div>
      /*   <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color='secondary' />
      </Backdrop> */
    );
  }
  /*  if (error || !user) {
    console.log('error');
    return <Navigate to={ROUTES.LOGIN.path} replace />;
  } */
  // if (user) {
  return <>{children}</>;
  // }
  return null;
};

export default AuthProvider;
