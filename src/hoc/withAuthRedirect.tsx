import React, { ComponentType, useLayoutEffect, useState } from 'react';
import { getItem } from '@utils/storage';
import { useNavigate, useLocation } from 'react-router-dom';

const withAuthRedirect = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  function AuthRedirect(props: P) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useLayoutEffect(() => {
      /* 토큰이 있는 상태일 때, /todo 경로로 리다이렉트 */
      const checkToken = async () => {
        const token = await getItem('token');

        if (!token && location.pathname === '/todo') {
          /* 토큰이 없는 상태에서 /todo 페이지 접속 시 /signin 경로로 리다이렉트 */
          navigate('/signin');
          setIsLoading(true);
          return null;
        } if (token && location.pathname !== '/todo') {
          /* 토큰이 있는 상태에서 /signin /signup 페이지 접속 시 /todo 경로로 리다이렉트 */
          navigate('/todo');
          setIsLoading(true);
          return null;
        }
        setIsLoading(false);
      };

      checkToken();
    }, [navigate, location.pathname]);
    if (isLoading)
      return <div>...loading</div>;
    return <WrappedComponent {...(props as P)} />;
  }

  return AuthRedirect;
};

export default withAuthRedirect;
