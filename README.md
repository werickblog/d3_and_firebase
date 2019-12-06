# d3_and_firebase

D3 and firebase project

## What is D3?

The main job of `D3` is to create `svg(s)` which we can then render into the browser.

### SVGs?

#### What are SVGs?

SVG's are scallable vector graphics. The are referred to: \* _scallable_ because no matter their size, they do not loose quality like `pngs` and `jpegs`. \* _vector_ because to create an svg you need to use vectors \* _graphics_ because they use diagrams in calculation and design.

#### How to create an SVG?

An SVG can be created in so many ways, this are: \* _third party software_: You can use software such as **Photoshop**, **Illustrator**, **Affinity Designer** and so many more to create designs which you can later, export as _svg_ \* _using html_: You can use html to create an SVG of any shape/vector

I will not dwell so much on using third party software rather on using html.

#### Using HTML to create SVG

To create an svg with HTML you will first have to enclose all you tags with the `<svg>` tags

```html
<!-- Define the svg tag and provide dimensions for your svg -->
<!-- The dimension units are in pixels(px) -->
<svg width="600" height="600">
  <!-- svg vector attributes
        x - define position of the vector along the x-axis, e.g. if x=0 then the vector will be positioned 0px from the left same as if it was 400px

        y - define position of the vectore along the y-axis, e.g. if y=200
        then the vector will be positioned 200px from the top

        fill - the color you want to fill the whole vector, if it is red then the whole vector will be filled with red, you can also use hsl() and hex values

        width - dimension values of the vector in width
        
        height - dimension values of the vector in height

        cx - define position of a circle vectore along the x- axis e.g if cx=30 then position the center of the circle at 30 px from the left

        cy - define position of a circle vectore along the y- axis e.g if cy=30 then position the center of the circle at 30 px from the top

        r - define the dimension of the circle with the value of the radius, e.g. if radius is 50 then the diameter of the circle is 2x that 100

        stroke - define the color for the border of the vector

        stroke-width - define the dimensions of the stroke in width. By default its 1

        x1 - define the starting position of a line vector on the x-axis, e.g x1=20 means the line will start from 20px from the left

        x2 - define the stopping point of a line vector on the x-axis, e.g. x2=120 means the line will move along to the right with 100px
        
        y1 - define the starting point of a line vector on the y-axis, e.g. y1=20 means the line will start from 20px from the top

        y2 - define the stopping point of a line vector on the y-axis, e.g. y2=120 means the line will move down a bit with 100px

        Note: Lines are not given a fill color rather a stroke attribute is used

        Note: Circles dimensions are determined by cx and cy, lines by x1,y1,x2, and y2

        d - this is a path attribute to determine where a vector should start and end
        The d attribute value starts with M - moveto and a value with a space e.g. M 150 that value is the starting point on the x-axis, 150px from the left, next there is a space e.g. M 150 50 that is the starting point of the vector on the y-axis, 50px from the top, what follows is a space and L - lineto and value, e.g. L10 50, the first number next to L is where the vector should go next on the x-axis and the next number on the y-axis from the starting point M xx xx, you can add consecutive L xxx xx/L xx xx/L xx xxx to close the vector add Z - closepath to the end and what that will do is on the final position it will take the point and connect it back to M. There are types of values more here https://youtu.be/9qsiJX8aINE?list=PL4cUxeGkcC9jI1rsj6qrr1eLQZA7FnN3S&t=1286.
        
        
    -->

  <!-- To define a rectangle vector we will use rect tag inside the svg canvas -->
  <rect x="300" y="100" fill="blue" width="100" height="200"></rect>

  <!-- To define a circle vector we will use circle tag inside the svg canvas -->
  <circle
    cx="200"
    cy="200"
    r="50"
    fill="black"
    stroke="red"
    stroke-width="2"
  ></circle>

  <!-- To define a line vector we will use line tag inside the svg canvas -->
  <line
    x1="100"
    y1="100"
    x2="120"
    y2="400"
    stroke="red"
    stroke-width="3"
  ></line>

  <!-- To define a complex vectors we will use path tag inside the svg canvas -->
  <path d="M150 0 L75 200 l225 200 Z" fill="pink" />
</svg>
```

#### How D3 comes to play?

As you can see, there is a lot of boiler plate html to be able to create a basic vector, this can become quite cumbersome. Dont give up yet because D3 is here to help. D3's job is to most of this for us.

## Getting Started with D3.js?

We will use D3 library cdn link to be able to use it

```html
<script src="https://d3js.org/d3.v5.js"></script>
```
