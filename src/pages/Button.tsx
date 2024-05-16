import { FlexContainer } from 'styled/FlexContainer.styled';
import { Link } from 'react-router-dom';
import { AnchorLink } from 'components/AnchorLink';

import { Button } from 'components/Button';

export const ButtonPage = () => {
  return (
    <FlexContainer direction="column">
      <h1>Custom Button Example</h1>

      <Button color="red">Default Button</Button>

      <Button as={Link} color="red" to="/">
        Button as a Router Link
      </Button>

      {/* @ts-expect-error - is throwing an error because Link requires a to */}
      <Button as={Link} color="red">
        Button as a Router Link
      </Button>

      {/* it would be nice to have an error here but technically href isnt a required prop of an a */}
      <Button as="a" color="red">
        Button as an a tag
      </Button>

      {/* @ts-expect-error - is throwing an error because AnchorLink requires a href prop*/}
      <Button as={AnchorLink} color="red">
        Button as an Anchor Link
      </Button>
    </FlexContainer>
  );
};
