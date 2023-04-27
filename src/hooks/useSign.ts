import { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '@api/auth';
import { validateEmail, validatePassword } from '@utils/validation';
import useAuth from './useAuth';

export default function useSign() {
  const navigate = useNavigate();
  const { saveToken } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async () => {
    try {
      const {
        success,
        message,
        access_token: token,
      } = await signIn({
        email,
        password,
      });
      if (success) {
        saveToken(token);
        alert('환영합니다');
        navigate('/todo');
      } else {
        alert(message);
      }
    } catch (error) {
      console.error(error);
      alert('로그인에 실패하였습니다.');
    }
  };

  const handleSignUp = async () => {
    try {
      const { success, message } = await signUp({ email, password });
      if (success) {
        navigate('/signin');
      } else {
        alert(message);
      }
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패하였습니다.');
    }
  };

  const isValid = useMemo(() => validateEmail(email) && validatePassword(password), [email, password]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    },
    [setEmail, setPassword]
  );

  return {
    email,
    password,
    isValid,
    handleChange,
    handleSignIn,
    handleSignUp,
  };
}
