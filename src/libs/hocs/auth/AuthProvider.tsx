// import { ROUTES } from "@libs/router/data";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = 'logined'; //sessionStorage.getItem('user');

  if (!auth) {
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
