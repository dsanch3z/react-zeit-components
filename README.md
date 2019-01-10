# react-zeit-components

<<<<<<< HEAD
> Zeit's design components to React

[![NPM](https://img.shields.io/npm/v/react-zeit-components.svg)](https://www.npmjs.com/package/react-zeit-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-zeit-components
```

or

```bash
yarn add react-zeit-components
```

## Usage

```tsx
import * as React from "react";
import { Button, RaisedContainer } from "react-zeit-components";

class Example extends React.Component {
  render() {
    return (
      <RaisedContainer>
        <div>
          <Button onClick={() => console.log("clicked")}>Action</Button>
        </div>
        <br />
        <div>
          <Button size="sm" onClick={() => console.log("clicked")}>
            Action
          </Button>
        </div>
      </RaisedContainer>
    );
  }
}
```

## Disclaimer

**I DO NOT OWN** any of these designs and **I DID NOT CREATE** them. These designs where created by [Zeit](https://zeit.co/) and [evilrabbit](https://evilrabb.it/) and belong to them only.

I'm just fascinated with [Zeit's design](https://zeit.co/design) and wanted to use their components in my personal projects, so I ported them to React. I couldn't find any license thing so I hope there isn't a problem, if there is one, please let me know.

I love what [Zeit](https://zeit.co/) is doing and so should you, check them out.
=======
Zeit's design components to React

## Disclaimer

**I DO NOT OWN** any of these designs and **I DID NOT CREATE** them. These designs where created by [Zeit](https://zeit.co/) and [evilrabbit](https://evilrabb.it/) and belong to them only.

I'm just fascinated with [Zeit's design](https://zeit.co/design) and wanted to use their components in my personal projects, so I ported them to React. I couldn't find any license thing so I hope there isn't a problem, if there is one, please let me know.

I love what [Zeit](https://zeit.co/) is doing and so should you, check them out.

## Usage

Install

```bash
npm i react-zeit-components
```

Use

```jsx
import { Button, RaisedContainer } from "react-zeit-components";

export default () => (
  <RaisedContainer>
    <div>
      <Button onClick={() => console.log("clicked")}>Action</Button>
    </div>
    <br />
    <div>
      <Button size="sm" onClick={() => console.log("clicked")}>
        Action
      </Button>
    </div>
  </RaisedContainer>
);
```
>>>>>>> 63a3e230a5caff87705b661adf9c529de9e06d6e

## Typography

- [x] Headings
- [ ] Lists
- [x] Paragraphs
- [x] Typeface

## Components

- [x] Avatar (just small size at the moment)
- [ ] Badges
- [x] Buttons
- [x] Checkbox
- [ ] Code
- [ ] Collapse
- [x] Colors (would be awesome if the color palette could be customized by the user)
- [ ] Fieldsets
- [ ] File Tree
- [ ] Images
- [x] Inputs
- [x] Note
- [ ] PopOver Menu
- [ ] Select
- [x] Show More
- [ ] Sliders
- [ ] Spinner
- [x] Table
<<<<<<< HEAD
- [ ] Toasts (WIP)
- [ ] Toggle
- [ ] Video Cards
- [ ] Videos

## License

MIT © [cube5](https://github.com/cube5)
=======
- [ ] Toasts
- [ ] Toggle
- [ ] Video Cards
- [ ] Videos
>>>>>>> 63a3e230a5caff87705b661adf9c529de9e06d6e
