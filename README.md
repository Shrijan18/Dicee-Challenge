# Dicee Challenge 🎲

A simple dice roll simulator built with HTML, CSS, and JavaScript.

## Table of Contents

- [About](#about)  
- [Demo](#demo)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Credits](#credits)  

## About

Dicee Challenge is a fun, minimal web app that simulates rolling two dice. On page load (or when you refresh), it randomly generates values for two dice and updates images to reflect the roll.

This is often used as a beginner-level JavaScript project to practice DOM manipulation, randomization, and event handling.

## Demo

You can see the project live at: https://shrijan18.github.io/Dicee-Challenge/

_You can host this locally or deploy via GitHub Pages._

1. Clone this repo  
2. Open `dicee.html` in your browser  
3. Observe two dice images, each showing a random face  

## Features

- Random dice roll on page load  
- Displays two dice side by side  
- Uses image assets to reflect dice faces  
- No external dependencies  

## Technologies

- HTML  
- CSS  
- JavaScript  

## Usage

1. Clone or download the repository:

   ```bash
   git clone https://github.com/Shrijan18/Dicee-Challenge.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Dicee-Challenge
   ```

3. Open `dicee.html` in your browser (double-click or via a local server).

4. Optionally, you may open the browser console to inspect the random numbers generated or adjust the logic in `index.js`.

## Project Structure

```
Dicee-Challenge/
│
├── images/           # Dice face images (1–6)
├── dicee.html        # Main HTML file
├── styles.css        # Stylesheet for layout & styling
└── index.js          # JavaScript logic for dice roll
```

- **images/** — Contains dice images named like `dice1.png`, `dice2.png`, etc.  
- **dicee.html** — The entry point and UI of the app.  
- **styles.css** — Styles & layout.  
- **index.js** — Logic for random number generation and DOM updates.

## Contributing

Contributions are welcome! You might:

- Add a “Roll Again” button  
- Add animations when dice change  
- Show total of both dice  
- Add more styling or themes  

To contribute, follow these steps:

1. Fork the repo  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Make your changes  
4. Commit (`git commit -m 'Add new feature'`)  
5. Push (`git push origin feature/YourFeature`)  
6. Create a Pull Request  

## License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute.
