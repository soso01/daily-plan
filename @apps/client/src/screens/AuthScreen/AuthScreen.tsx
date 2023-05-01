import { Layout } from '@/common/components/Layout';

import { LoginButtons } from './LoginButtons';
import { LoginHeader } from './LoginHeader';

export const AuthScreen = () => {
  return (
    <Layout>
      <LoginHeader />
      <LoginButtons />
    </Layout>
  );
};