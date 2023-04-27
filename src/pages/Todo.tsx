import withAuthRedirect from '@hoc/withAuthRedirect';
import React, { FC } from 'react';

const TodoPage: FC = function () {
  return <div className="pt-36 flex flex-col justify-center items-center text-white" />;
};

export default withAuthRedirect(TodoPage);
