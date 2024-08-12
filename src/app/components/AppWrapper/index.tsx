import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="flex min-h-screen w-screen justify-center bg-[url(assets/background.jpg)] bg-cover bg-center bg-no-repeat px-2 lg:px-0">
      <div className="border-primary-950 min-h-screen w-full border-x bg-black px-2 lg:w-[1280px]">{children}</div>
    </div>
  );
}
