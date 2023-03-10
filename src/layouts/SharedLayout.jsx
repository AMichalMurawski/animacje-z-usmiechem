import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.scss';
import { FidgetSpinner } from 'react-loader-spinner';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { MenuIcon } from 'components/MenuIcon/MenuIcon';

export const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Suspense
          fallback={
            <FidgetSpinner
              backgroundColor="mediumaquamarine"
              ballColors={['plum', 'plum', 'plum']}
              wrapperClass={css.spinner}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MenuIcon />
      <UserMenu />
    </div>
  );
};
