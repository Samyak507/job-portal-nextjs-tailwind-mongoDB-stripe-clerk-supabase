
import { ReactNode } from 'react';
import Header from '../header';
import { currentUser } from '@clerk/nextjs/server';
import { fetchProfileAction } from '@/src/actions';

interface CommonLayoutProps {
  children: ReactNode;
}

async function CommonLayout ({ children })  {

  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id)


  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component */}
        <Header profileInfo={profileInfo}
        user ={JSON.parse(JSON.stringify(user))} />
      {/* Header Component */}

      {/* Main Content */}
      <main>{children}</main>
      {/* Main Content */}
    </div>
  );
};

export default CommonLayout;
