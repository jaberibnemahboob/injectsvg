# Inject SVG Code
Inject SVG Code is a simple independent Javascript function to inject svg code to html where svg images use with image tag. It's main use when you want to keep your code simple in your original html file and want to play with svg elements. It's simply remove the image tag ('img') having source file as svg and copy the whole svg file to it's place. Perfact examples - if you want to change and svg image element on runtime, if you want to apply css/js on svg elements or, if you want to animate svg element using css/js with proper control.

## Getting Started
To use Inject SVG simply add 'injectsvg.min.js' script from distribution directory to your project, then add a class "injectsvg" to your image tag. Ensure, you have added the script to the body of html. Link to instation [instruction](https://jaberibnemahboob.github.io/injectsvg/).
```
<img class="injectsvg" src="images/drivingcar.svg" alt="SVG file"/>

<script src="dist/js/injectsvg.min.js"></script>
```

## Examples
This example how easy to apply css rule on the svg element after the script is properly installed. Link to this example [here](https://jaberibnemahboob.github.io/injectsvg/index.htm).
```
<img class="injectsvg" src="images/drivingcar.svg" alt="SVG file"/>

<script src="dist/js/injectsvg.min.js"></script>
```
This style will change the color of svg visual element. Make sure, you have defined svg elements using classes/ids like this:
`<style type="text/css">
    .wheel{fill:#FF0000;}
    .topRailing{fill:#999999;}
    .carBody{fill:#990000;}
</style>`

## License
The code is available under the [MIT License](LICENSE).