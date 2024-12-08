
# Final project JavaScript

This application allows users to quickly add, sort, and delete Name-Value pairs. It provides an intuitive interface, 
data input validation, and a responsive design for different devices.

## Program functionality:

#### 1.Adding Name-Value pairs
    * Format: <name> = <value>.
    * <name> and <value> contain only alphanumeric characters.
    * Spaces before and after "=" are removed.

#### 2.Validation of entered data
    * If the format is incorrect, the pair is not added and an error is displayed.

#### 3.Sorting entered pairs
    * Sort by name.
    * Sort by value.

#### 4.Delete pairs
    * Option to remove selected items from the list.

#### 5.Adaptive design
    * The interface automatically adapts to different screen sizes (mobile devices, tablets, and desktops)

## Project composition
    - index.html
    - css:
        - style-desktop.css
        - style-table.css
        - style-mobile.css
    - js:
        - main.js

## Technologies used

- **HTML5:** Interface structure.
- **CSS:** page styling (adding colors, setting sizes, and adapting to different devices)
- **JavaScript:** Program logic (adding, sorting, deleting, validation).

## Usage:

1. Installation
   - Download the project from the repository:
   https://github.com/Maietskyi/JavaScript-Project-sept-2024.git
2. Launch
   - Open the index.html file in any modern web browser.

#### User Guide:
    - Enter the pair "Name=Value" in the text box in the format name=value.
    - Click the Add button to add the pair to the list.
    - Use the buttons:
        * 'Sort by Name' to sort by name.
        * 'Sort by Value' to sort by value.
        * 'Delete' to remove the selected items from the list.

#### Example of a pair:
    - ✅ Correct: 
        - username34 = Misha19
        - user=19
    - ❌ Incorrect: 
        - user-name 34 = Misha 19 
        - user-name*34:Misha/19 


