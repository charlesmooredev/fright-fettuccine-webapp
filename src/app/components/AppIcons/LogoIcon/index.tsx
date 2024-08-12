import AppLogoSvg from './logoicon.svg?react';

interface Props {
  className?: string;
}

export function LogoIcon({ className }: Props) {
  return <AppLogoSvg className={className} />;
}
