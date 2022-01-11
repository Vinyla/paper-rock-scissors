import React from 'react';
import Score from './Score';
import RulesButton from './RulesButton';

const Header = () => {

  return (
    <div className='header'>
      <Score />
      <RulesButton />
    </div>
  );
};

export default Header;
