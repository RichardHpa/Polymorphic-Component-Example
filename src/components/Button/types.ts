export interface ButtonProps {
  color: string;
}

type CustomComponentProps<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  O extends object
> = React.ComponentPropsWithRef<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any> ? C : never
> &
  O & { as?: C };

export interface CustomComponent<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  O extends object
> {
  <AsC extends keyof JSX.IntrinsicElements | React.ComponentType<any> = C>(
    props: CustomComponentProps<AsC, O>
  ): React.ReactElement<CustomComponentProps<AsC, O>>;
}
