'use client';

import { ScrollProgress } from '@/components/ScrollProgress';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
