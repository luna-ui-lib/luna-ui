# Luna-ui
A React ui-lib built with StyledComponents

 ![luna banner](./luna.png)
 
 ## Tech Stack

| ES2018 | React | Styled Components | Jest |
|:------:|:-------:|:-----:|:----:|
| <img width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"> | <img width="70px" src="https://cdn.worldvectorlogo.com/logos/react.svg"> |  <img width="70px" src="https://www.styled-components.com/static/atom.png"> | <img width="70px" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png"> |


 ## Install

 ```
  yarn add luna-ui-lib
 ```


## Usage
To install the dependencies run `yarn` or `npm install`. Then `yarn build:w` or `npm run build:w` to run the project.

To load the extension on the browser:
* Go to `chrome://extensions/` on Google Chrome
* Clink on `Load unpacked` button, and point to the `dist` folder

The `dist/main.js` file will be generated dynamically after any change in the project.

## Unit Tests
To run the unit tests:
```
yarn test
```

## Docs
* [Storybook](https://paulsecret.github.io/luna-ui/index.html?path=/story/*) - `./docs`

## Project Structure
```
.
+-- README.md
+-- .gitignore
+-- .babelrc
+-- .npmignore
+-- package.json
+-- /docs
|   +-- ... github pages content
+-- /stories
|   +-- ...
+-- /src
|   +-- /components
|   |   +-- ...
|   +-- /config
|   |   +-- ...
|   +-- index.js
|   +-- setupTests.js
```
