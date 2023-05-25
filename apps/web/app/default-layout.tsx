'use client';

import type { PropsWithChildren } from 'react';
// import { useTranslation } from 'next-i18next';
import { BottomNav } from './components/BottomNav';
import { Breadcrumbs, Breadcrumb } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { NarrowContainer } from './components/NarrowContainer';
import { Navbar } from './components/Navbar';
import { ScrollToTopButton } from './components/ScrollToTopButton';

type LayoutPropsType = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
};

export function DefaultLayout({ children, breadcrumbs = [] }: LayoutPropsType): JSX.Element {
  // const { t } = useTranslation();

  return (
    <>
      <Navbar />
      {breadcrumbs && (
        <NarrowContainer>
          <div className="p-4 md:px-0">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </NarrowContainer>
      )}
      <main>{children}</main>
      <BottomNav />
      <ScrollToTopButton />
      <Footer className="mb-[58px] md:mb-0" />
    </>
  );
}
