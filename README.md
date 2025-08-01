🎥 Live Streaming Platform UI
This project is a React-based live streaming platform interface with an interactive image slider, built using Swiper.js and styled with custom CSS.

It’s designed to showcase streaming features, community events, and interactive thumbnails in a modern, sleek UI.

✨ Features
🎯 Centered active slide — the selected slide is highlighted and larger than the rest.

💬 Text overlay — appears only on the active slide.

🌫 Blur + dark effect — applied to inactive slides.

🎬 Autoplay slider — automatically cycles through slides.

🖱 Thumbnail navigation — click a thumbnail to jump to that slide.

📱 Responsive design — works across desktop, tablet, and mobile.

📂 Project Structure
graphql
Copy
Edit
src/
│
├── components/
│   ├── Front.jsx          # Main Swiper slider component
│
├── assets/                # All slider images
│
├── App.js                 # Root React component
├── index.js               # React DOM entry point
└── styles/                # Custom CSS styles
⚙️ Installation
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/live-streaming-ui.git
cd live-streaming-ui
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Start development server

bash
Copy
Edit
npm start
Runs the app at: http://localhost:3000

📜 Available Scripts
Command	Description
npm start	Runs the app in development mode
npm test	Launches the test runner
npm run build	Builds the app for production
npm run eject	Ejects from CRA configuration

🛠 Technologies Used
React.js

Swiper.js

JavaScript (ES6+)

Custom CSS

Create React App

🎨 Customization
To change images → update src/assets/

To change slide text → edit sliderData in Front.jsx

To adjust styling → modify .css in styles/ folder

🚀 Deployment
To create a production build:

bash
Copy
Edit
npm run build
Then upload the build/ folder to your hosting provider (Vercel, Netlify, AWS, etc.).

