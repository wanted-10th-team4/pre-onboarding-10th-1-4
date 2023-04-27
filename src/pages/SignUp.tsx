import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import useSign from '@hooks/useSign';
import withAuthRedirect from '../hoc/withAuthRedirect';

function SignUpForm() {
  const { isValid, handleChange, handleSignUp } = useSign();

  const handleSubmitSignUp = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      await handleSignUp();
    },
    [handleSignUp]
  );

  return (
    <div className="pt-56 flex flex-col justify-center items-center">
      <form className="my-4 p-3 w-1/2 max-w-sm text-md">
        <div className="flex items-center h-14">
          <label htmlFor="email-input" className="sign-label">
            <FaUser className="text-white font-bold" />
          </label>
          <input
            data-testid="email-input"
            id="email-input"
            name="email"
            className="sign-input"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center h-14 mt-4">
          <label htmlFor="password-input" className="sign-label">
            <FaLock className="text-white font-bold" />
          </label>
          <input
            data-testid="password-input"
            id="password-input"
            type="password"
            name="password"
            className="sign-input"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button
          data-testid="signup-button"
          type="submit"
          className="sign-submit"
          disabled={!isValid}
          onClick={handleSubmitSignUp}>
          SIGN UP
        </button>
      </form>
      <p className="font-semibold text-secondary">
        Already exist account?{' '}
        <Link to="/signin" className="text-anchor hover:underline">
          Sign in now
        </Link>
      </p>
    </div>
  );
}

export default withAuthRedirect(SignUpForm);
