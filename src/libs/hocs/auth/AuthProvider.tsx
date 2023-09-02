// import { ROUTES } from "@libs/router/data";
// import { Navigate } from "react-router-dom";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [user, loading, error] = useIdToken(auth);
  const loading = false;

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
