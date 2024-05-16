import { ButtonStyles } from './Button.styled';

import type { ButtonProps, CustomComponent } from './types';

export const Button: CustomComponent<'button', ButtonProps> = ({
  as: Component = 'button',
  ...props
}) => {
  return <ButtonStyles as={Component} {...props} />;
};
