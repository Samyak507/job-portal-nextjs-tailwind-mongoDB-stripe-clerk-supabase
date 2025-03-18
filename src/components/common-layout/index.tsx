
import { ReactNode } from 'react';
import Header from '../header';

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component */}
        <Header />
      {/* Header Component */}

      {/* Main Content */}
      <main>{children}</main>
      {/* Main Content */}
    </div>
  );
};

export default CommonLayout;
