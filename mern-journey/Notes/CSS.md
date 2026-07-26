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