---

# Custom Firefox Homepage with Nerd Fonts - Mocha Theme

![image](https://github.com/user-attachments/assets/a34acb55-547f-4201-94ca-23a4fcb6b252)

This project provides a custom Firefox homepage that is themed after **Catppuccin Mocha**, a popular color palette that features warm, calming tones. The homepage includes the current time, date, and clickable social media shortcuts, all styled with **Nerd Fonts** to give it a sleek, terminal-like aesthetic.

The homepage layout and design are fully responsive, ensuring a smooth experience across all screen sizes. The colors used on the homepage are inspired by the **Catppuccin Mocha** palette, making it ideal for users who enjoy a cozy and visually pleasing interface.

## Features:
- Displays the current time and date in a minimalist design.
- Features interactive social media icons (GitHub, YouTube, Spotify, Reddit, and Discord).
- Uses **Nerd Fonts** for terminal-like styling and icons.
- Inspired by the **Catppuccin Mocha** color palette, giving a warm, dark theme with soft hues.
- Fully responsive and adjusts to different screen sizes.

## How to Set This as Your Firefox Homepage

Follow the steps below to make this custom homepage your default start page in Firefox:

### Step 1: Download the Project Files
1. Download the project files, which include:
   - `index.html` – The HTML structure of the custom homepage.
   - `styles.css` – The CSS file for the styling and layout.
   - `index.js` – The JavaScript file for displaying the time, date, and handling icon clicks.

### Step 2: Modify the HTML and CSS Files
1. Open the `index.html` file in a text editor (such as VSCode, Sublime Text, or Notepad++).
2. Ensure that all files are in the same folder to ensure proper loading of the image and styles.
3. You can replace the default background image (`imgs/cat_mocha_version.jpg`) with your own image by modifying the `background-image` property in the `body` section of `styles.css`.

### Step 3: Set Your Firefox Homepage
1. Open Firefox.
2. In the menu bar, click on the three horizontal lines (hamburger icon) in the upper right corner of Firefox and select **Settings**.
3. Scroll down to the **Homepage and new windows** section.
4. From the drop-down menu, select **Custom URLs**.
5. In the text box, enter the file path to the `index.html` file you downloaded. The path should look something like this:
   ```
   file:///C:/path/to/your/project/index.html
   ```
   (Make sure to replace "C:/path/to/your/project" with the actual file path on your computer.)

Alternatively, you can host the files on a web server and use the URL in the homepage settings.

### Step 4: Enable Nerd Fonts on Your Homepage
The project utilizes **Nerd Fonts** for terminal-like icons and a custom font style.

1. The `index.html` file links to an external Nerd Fonts stylesheet hosted on `https://www.nerdfonts.com/assets/css/webfont.css`. This enables the use of custom icons and font styles.
2. No additional installation is required since the font is imported directly into the HTML file. However, if you prefer to download the Nerd Fonts and serve them locally, you can follow the instructions on the Nerd Fonts [official website](https://www.nerdfonts.com/).

### Step 5: Enjoy Your Custom Firefox Homepage!
Once you’ve followed all the steps, open a new tab in Firefox to see your custom homepage in action, displaying the current time, date, and interactive social media icons.

## File Breakdown

### `index.html`
This file contains the structure of the homepage, including:
- A time section that updates every minute.
- A date section showing the current month and day.
- A search bar styled like a terminal.
- Social media icons (GitHub, YouTube, Spotify, Reddit, Discord) that open in a new tab when clicked.

### `styles.css`
This file provides the styling for the homepage, including:
- **Catppuccin Mocha** color theme: Soft, warm tones for a cozy and relaxing aesthetic.
- Flexbox layout to center content.
- Custom background image (you can change this by modifying the `background-image` property).
- Styling for the social media icons using **Nerd Fonts** and hover effects.
- Media queries for responsive design, adjusting layout and font size on smaller screens.

### `index.js`
This file handles the functionality of the homepage, including:
- **displayTime()**: Updates the current time every minute and displays it in 12-hour format with AM/PM.
- **displayDate()**: Shows the current date in the format "Month Day" (e.g., "Jan 5").
- Event listeners for the social media icons that open the respective websites in a new tab.

## Customization
Feel free to customize the homepage to your liking:
- Change the background image by modifying the `background-image` property in the CSS file.
- Modify the social media icons by adding or removing them from the HTML and adjusting their event listeners in the JavaScript file.
- Adjust the layout and font sizes in `styles.css` to better suit your preferences.

---

### Enjoy your new **Catppuccin Mocha-themed** Firefox homepage with all the latest tech flair! 🎉
