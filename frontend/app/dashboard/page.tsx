'use client';
import { AppConfig } from '@/utils/data/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Page() {
  const Router = useRouter();
  useEffect(() => {
    Router.push(AppConfig.PATHS.Dashboard.Overview.Base);
  }, []);

  return <></>;
}

export default Page;
