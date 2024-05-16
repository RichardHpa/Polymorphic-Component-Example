import { Link } from 'react-router-dom';
import { Button, List, ListItemButton } from '@mui/material';

import { AnchorLink } from 'components/AnchorLink';

import { FlexContainer } from 'styled/FlexContainer.styled';

export const MuiPage = () => {
  return (
    <FlexContainer direction="column">
      <h1>MUI examples</h1>

      {/* Default Button which */}
      <Button variant="contained">Default Button</Button>

      {/* Button with a link. Typescript tells me that to is required */}
      <Button component={Link} to="/" variant="contained">
        Router Button
      </Button>

      {/* @ts-expect-error */}
      <Button component={Link} variant="contained">
        Router Button without to
      </Button>

      {/* Button with a standard a tag. I would of expected this to throw an error but since href isnt a isnt a react element with props it makes sense */}
      <Button component="a">Button as an a tag</Button>

      <Button component={AnchorLink}>Button as an a AnchorLink component</Button>

      <List>
        <ListItemButton>Item 1</ListItemButton>
        <ListItemButton component={Link} to="/">
          Item 2
        </ListItemButton>
      </List>
    </FlexContainer>
  );
};
