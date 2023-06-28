import React, {ReactNode} from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-radial bg-main-color-pink ">
      <header className="py-4">{/* Add your header content here */}</header>

      <main className="flex-grow mx-auto px-4 max-w-sm xl:max-w-screen-xl md:max-w-screen-md sm:w-90 w-full">
        {children}
      </main>

      <footer className="py-4 bg-main-color-pink-dark">{/* Add your footer content here */}</footer>
    </div>
  );
};

export default Layout;
