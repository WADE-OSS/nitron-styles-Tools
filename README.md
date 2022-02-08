# Nitron Styles Tools
You can build a designed web easily and quickly with the components defined by default.
- [Nitron.js](https://github.com/WADE-OSS/nitron) ─ To use this component, you must first use Nitron.js.
- [About Nitron.js components](https://nitronjs.org/docs/components) ─ High compatibility with basic component functions.

styles Tools use Nitron's native component functionality. Do not arbitrarily create a component with the same name as an already declared component (eg Card). 

[Read more](https://nitronjs.org/styles-tools/docs/components)


## Get started quickly with a CDN
```html
<script src="https://cdn.jsdelivr.net/gh/WADE-OSS/nitron-styles-Tools@0.0.1/dist/styles-tools.js" integrity="sha384-aEYpaWnJOruh8BY8fgk3Oo/pTknVav8FngW1Pvw34YfHcPObeTG5iTzXfhsZIdNk" crossorigin="anonymous"></script>
```
Nitron Styles Tools can only be used with Nitron.js v0.0.5 or higher. [Read more](https://nitronjs.org/styles-tools/docs/getting-started)

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
