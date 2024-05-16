import type { FC } from 'react';
import type { AnchorLinkProps } from './types';

export const AnchorLink: FC<AnchorLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="blank">
      {children}
    </a>
  );
};
