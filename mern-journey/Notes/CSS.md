# CSS Notes

## CSS Basics

- What is CSS?
CSS stands for Cascading Style Sheets. It is used to style and design HTML webpages.

- What is a selector?
A selector selects the HTML element that you want to style.

- What is a property?
A property describes what you want to change. Ex- color (change the text color) etc.

- What is a value?
A value tells CSS how you want the property to look or behave. Ex- p= aelector, font-size= property, 20px= value.

- What are the three ways to add CSS?
1. inline CSS
CSS is written directly inside the HTML element using style attribute.
2. internal CSS
CSS is written inside a <style> tag in HTML <head>. useful when styling a single webpage.
3. external CSS
CSS is written in aseprate .css file.

- Why is external CSS preferred?
External CSS is preferred because it keeps HTML and CSS seprate. and the same style.css file can style multiple HTML pages.

## CSS Selectors

- Element selector
- An element selector selects HTML elements using their tag name. Ex- h1, p, etc. this applies the style to all <h1> or <p> elements.

- Class selector
- A class selector selects elements using the class attribute. the dot(.) is used brfore the class name. the same class can be used on multiple hTMl elements.

- ID selector
An id selector selects one specific elements using  the id attribute. the hash(#) is used before the id name. an id should genrally be unique on a page.

- Grouping selector
A grouping selector allows you to apply the same CSS style to multiple selectors. Ex- h1, p, button{}. this applies the same font-family to <h1> <p> <button> grouping makes your CSS shorter and cleaner.

## CSS Colors

- Named colors
CSS provides many predefined colorrs names that you can directly use. Ex- red, green, blue, etc.

- Hexadecimal colors
Hex colors use # followed by six characters. Ex- #RRGGBB
RR - Red
GG - Green
BB - Blue

- RGB colors
RGB stands for Red, Green, Blue. Value range from 0 to 255. Ex- rgb(255, 0, 0)
Red: 255
Green: 0
Blue: 0

- background-color
The background-color property changes the background color of an element.

- color
The color property changes the text color.

## CSS Text and Fonts

- text-align
These properties are used to style and control text in CSS. Ex- Left, Right, Center.

- font-size
It changes the size of the text.

- font-family
It changes the tupeface or font uused for the text.

- font-weight
It controls how thick or bold the text appears. you can also use numbers. Ex- 400-Normal, 700-Bold.

- text-decoration
It adds or removes decoration from text. Ex- to remove the default underline from a link.

## CSS Box Model

- Content
The content is the actual information inside an element.

- Padding
Padding is the space between the content and the border.

- Border
A border is the line around the content and padding.

- Margin
Margin is the space outside the border. it creates space between the element and other elements.

- Width
Width controls how wide an element is.

- Height
Height controls how tall an element is.

## CSS Display Property

- block
Starts on a new line. usually takes the full available width.

- inline
Stays on the same line. takes only the space it needs.

- inline-block
Stays on the same line like inline. allows you to set width and height like block.

- none
Completely hides the element. it also takes up no space.

## CSS Position Property

- static
Static is the default position of every HTML element. elements appear in the normal document flow, top, right, bottom, left do not have any effect.

- relative
Relative keeps the element in its normal position, but allows you to move it using top, right, bottom, or left.

- absolute
Absolute removes the element from the normal document flow. it is positioned relative to its nearest positioned parent(a parent with position: relative,absolute,fixed, or sticky).

- fixed
fixed positions an element relative to the browser window. it stays in the same place even when the page is scrolled.

- sticky
sticky behaves like relative until you scroll to a specified position. then it sticks to that position.

## CSS Flexbox

What is Flexbox?
Flexbox is a CSS layout system used to arrange elements in a easily row or column. it helps to control:
-The direction of elements
-Spacing between elements
-Horizontal alignment
-Vertical alignment

What does display: flex do?
display: flex turns the elements into a flex container. its direct child element becom flex items. by default flexbox palaces the child elements in a row.

What is the difference between justify-content and align-items?
justify-content aligns items along the main axis. when flex-direction: row, it controls horizontal alignment.
align-items aligns items along the cross axis. when flex-direction: row, it controls vertical alignment.

What does gap do?
gap adds space between flex items.

When would you use flex-direction: column?
when you want the child elements to appear vertically, one below another.

## CSS Grid

- display: grid
Turns an element into a grid container. it allows you to arrange items into rows and columns.

- grid-template-columns
Defines the number and size of columns.

- grid-template-rows
Defines the number and size of rows.

- gap
Creates space between rows and columns.

- grid-column
Controls which columns an item occupies. you can also specify a starting and ending column.

- fr unit
fr means fraction of the available space.

## Responsive Design

- Viewport
The viewport is the visible area of a webpage on a devices screen. Ex- Desktop = Large viewport, Tablet = Medium viewport, Mobile = Small viewport.

- Media queries
A media query allows CSS to apply diffrent style depending on the screen size.

- max-width
max-width means "up to this width".

- Mobile-first design
Mobile-first means you design your website for small screens first, then add styles for larger screens.