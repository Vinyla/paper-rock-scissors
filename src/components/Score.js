import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {
  const score = useSelector((state) => state.score.score);
  
  return <p>SCORE: {score}</p>;
};

export default Score;
