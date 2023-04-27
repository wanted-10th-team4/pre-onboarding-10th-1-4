import { Link } from 'react-router-dom';
import React from 'react';

export default function Main() {
  return (<div className='pt-56 flex flex-col justify-center'>
    <h1 className='text-7xl text-center font-bold text-primary'>Todo List</h1>
    <p className='text-2xl text-center font-bold text-secondary'>Wanted Pre-Onboarding Assignment</p>
    <Link to="/todo" className='mt-5 flex justify-center items-baseline'>
      <button type='button' className='text-8xl font-bold text-secondary'>Go</button>
    </Link>
  </div>);
}
