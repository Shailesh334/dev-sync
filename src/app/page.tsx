'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {

      const { isSignedIn } = useUser();
      const router = useRouter();
    
      useEffect(() => {
        if (isSignedIn) {
          router.push('/dashboard');
        }
        else{
            router.push('/landing');
        }
      }, []);

  return <div></div>;
};

export default Page;
