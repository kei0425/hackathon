# Get started

```
git clone https://github.com/ksyunnnn/react-starter
cd react-starter
yarn
# or npm install
yarn start
# or npm start
# access http://localhost:3000/
```

# How it works

## styled components

```
import styled from "styled-components";

const Header = styled.div`
  padding: 2vh;
`;
```

## Routing

```
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

<Switch>
  {[
    {
      path: '/',
      component: Root,
    },
    {
      path: '/about',
      component: About,
    },
  ].map((v,i) => {
    return <Route key={i} exact path={v.path} component={v.component} />;
  })}
</Switch>
```

## helpers etc

```
import styled from "styled-components";
import { Colors } from "../variables";
import { media } from '../helpers/media-query';

export const MainContainer = styled.div`
  padding: 20vh 32vw;
  ${media.phone`
    padding: 20vh 16px;
    background: ${Colors.red};
  `}
`;
```

You can use Prettier via `git add` before you commit.
// or `./node_modules/.bin/prettier --write "./**/*.js"`


You can import resorce without ``../`` by `.env`ファイル
