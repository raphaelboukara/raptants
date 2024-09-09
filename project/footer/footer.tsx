import type { ReactNode } from 'react';

export type FooterProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <div style={{backgroundColor: 'blue', height: '100px'}}>
      {children}
    </div>
  );
}
