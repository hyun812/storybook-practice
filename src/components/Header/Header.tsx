import React from 'react';

interface IHeaderProps {
  isLogin: boolean;
  onClick: () => void;
}

const Header = ({ isLogin, onClick }: IHeaderProps) => {
  const path = 'interview';

  return (
    <div className="flex justify-between py-3 px-10">
      <div>
        <p className="font-bold">StoryBook</p>
      </div>
      <div className="flex gap-5">
        <p className={`${path === 'interview' && 'text-[#5A8AF2]'}`}>Story</p>
        <p>Book</p>
        <p onClick={onClick}>{isLogin ? 'Logout' : 'Login'}</p>
      </div>
    </div>
  );
};

export default Header;
