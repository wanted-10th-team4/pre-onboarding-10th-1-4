import { SignInRequestBody, SignInResponse, SignUpRequestBody, SignUpResponse } from '@type/constants';
import api from './index';

const signIn = async (body: SignInRequestBody): Promise<SignInResponse> => {
  try {
    const response = await api.post<SignInResponse>(`/auth/signin`, body);
    const { access_token: token } = response.data;

    return { success: true, message: '로그인에 성공하였습니다.', access_token: token };
  } catch (error) {
    throw new Error('로그인에 실패하였습니다.');
  }
};

const signUp = async (body: SignUpRequestBody): Promise<SignUpResponse> => {
  try {
    const response = await api.post(`/auth/signup`, body);

    if (response.status === 201) {
      // eslint-disable-next-line no-alert
      alert('회원가입에 성공하였습니다.');
      return { success: true, message: '회원가입에 성공하였습니다.' };
    }
    throw new Error('회원가입에 실패하였습니다.');
  } catch (error) {
    throw new Error('회원가입에 실패하였습니다.');
  }
};

export { signIn, signUp };
