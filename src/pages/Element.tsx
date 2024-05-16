import { Element } from 'components/Element';

import { FlexContainer } from 'styled/FlexContainer.styled';

export const ElementPage = () => {
  return (
    <FlexContainer direction="column">
      <h1>Element Component</h1>
      <p>
        Based off
        https://www.fullstack.com/labs/resources/blog/typescript-react-component-interfaces-overloading-by-props
      </p>

      <Element>Element</Element>

      <Element as="a" href="https://www.fullstack.com">
        Element as an anchor
      </Element>

      <Element as="a">Element as an anchor</Element>

      {/* @ts-expect-error - this throws an error since an hr is a void element */}
      <Element as="hr">Element as an anchor</Element>

      <Element as="button">Element as a button</Element>
    </FlexContainer>
  );
};
