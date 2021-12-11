<p align="center">
  <img src="https://user-images.githubusercontent.com/69592270/145664681-6a37d7b7-f882-4e38-ac3f-da8e61e778b4.png" />
  <a href="https://harshhhdev.github.io/custom-pointer-react/">
    <h2 align="center">custom-pointer-react</h2>
  </a>
</p> 
<p align="center">:rocket: Custom cursors for React</p>
<p align="center">
  <a href="https://www.figma.com/file/imEzzbwD0dUNAJg2cdF4MK/Issure">NPM</a>
    ·
  <a href="https://issure.vercel.app/">Demo</a>
 </p>

# 🚀 Quickstart

Install the [npm package](https://www.npmjs.com/package/custom-pointer-react)

```zsh
yarn add custom-pointer-react
```

Next, import & customise the cursor to your liking! Make sure to wrap the app in the context afterwards.

Need help customising? Play around with values on our [website!](https://harshhhdev.github.io/custom-pointer-react)

```jsx
import { Cursor } from 'custom-pointer-react'
...
const Cursor = () => {
  return (
    ...
    <Cursor {...passParametersToCustomise} />
    ...
  )
}
...
export default App
```

Next, wrap the app in the `MouseContext`

```jsx
import { MouseContextProvider } from 'custom-pointer-react'
...
ReactDOM.render(
  <MouseContextProvider>
    <App />
  </MouseContextProvider>,
  document.getElementById('root')
)
...
```

To hide the computer's cursor, add the following CSS:

```css
* {
  cursor: none !important;
}
```

# 📚 Parameters

_Note: All parameters are optional_

| Parameter  | Description                                         | Default Value |
| ---------- | --------------------------------------------------- | ------------- |
| color      | The background colour of the cursor                 | #000000       |
| showRing   | Controls whether to show the ring around the cursor | true          |
| ringSize   | Controls the size of the ring around the cursor     | 50px          |
| cursorSize | Controls the size of the cursor                     | 10px          |
| ringBorder | Controls the width of the ring's border             | 2px           |

# 💻 Development

Run the project locally

```
git clone https://github.com/harshhhdev/custom-pointer-react.git
```

## Setting up the project

```zsh
cd custom-pointer-react

# install deps
yarn
```

## Starting server

```zsh
yarn start
```

This should compile an instance of your project to the `dist` folder

# 🔧 Tools Used

- [create-react-library](https://www.npmjs.com/package/create-react-library)
- [TypeScript](https://www.typescriptlang.org/)
- [Microbundle](https://github.com/developit/microbundle)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
