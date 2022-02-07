# Nitron Styles Tools
You can build a designed web easily and quickly with the components defined by default.
- [Nitron.js](https://github.com/WADE-OSS/nitron) ─ To use this component, you must first use Nitron.js.
- [About Nitron.js components](https://nitronjs.org/docs/components) ─ High compatibility with basic component functions.

styles Tools use Nitron's native component functionality. Do not arbitrarily create a component with the same name as an already declared component (eg Card). 

[Learn more](https://nitronjs.org/styles-tools/docs/components)


## Get started quickly with a CDN
```html

```

## Examples
All components are prepared in [web documents](https://nitronjs.org/styles-tools/docs).
```js
const App = `
<Container>

  <Card>
    <Box>
    <Text size="14px" p="10px" color="${text.gray[600]}">Word of the Day</Text>
    </Box>
  </Card>

</Container>
`

nitronDOM.render(App,document.getElementById('root'));
```
This example component is styled and rendered on the page.
