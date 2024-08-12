import { Header } from '../index';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function HeaderWithContent({ children }: Props) {
  return (
    <div className="space-y-3">
      <Header />
      <div className="pb-10">{children}</div>
    </div>
  );
}
