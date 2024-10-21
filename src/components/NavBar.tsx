import React from 'react';

const NavBar = ({ component }: { component: React.ReactElement }) => {
  return (
    <div className="bg-blue h-[123px] mx-auto flex items-center shadow shadow-right">
      {component}
    </div>
  );
};

export default NavBar;
