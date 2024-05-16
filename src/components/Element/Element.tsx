import { StyledElement } from './Element.styled';

export interface ElementProps {}

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type VoidElement =
  | 'area'
  | 'base'
  | 'br'
  | 'col'
  | 'hr'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'param'
  | 'command'
  | 'keygen'
  | 'source';

export type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
  ? Omit<React.ComponentPropsWithRef<C>, 'children'>
  : React.ComponentPropsWithRef<C>;

export interface OverloadedElement<P> {
  <C extends React.ElementType>(
    props: { as: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>
  ): JSX.Element;

  (props: P & DistributiveOmit<React.ComponentPropsWithRef<'div'>, keyof P>): JSX.Element;
}

export const Element: OverloadedElement<ElementProps> = ({ as: Component = 'div', ...props }) => {
  return <StyledElement as={Component} {...props} />;
};
