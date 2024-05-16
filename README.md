# React polymorphic components with TypeScript

Example project of how to create polymorphic components in React with TypeScript.

### Example

```tsx
import { Button } from './Button';
import { Link } from 'react-router-dom';

<Button as={Link} to="/home">
  Home
</Button>;
```

### Articles

- https://www.fullstack.com/labs/resources/blog/typescript-react-component-interfaces-overloading-by-props
- https://www.christianvm.dev/blog/react-as-prop
- https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2
- https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
