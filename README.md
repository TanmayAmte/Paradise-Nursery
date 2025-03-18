🌿 Paradise Nursery
Welcome to Paradise Nursery, a beautifully designed online plant nursery website built using React.js and Redux. 🌱
The website allows you to browse through a collection of flowers, add them to your cart, and proceed to checkout.

🚀 Live Demo
🔗 Paradise Nursery

🌟 Features
✅ Browse a variety of flowers with descriptions and prices.
✅ Add/remove items to/from the cart.
✅ Increment/decrement item quantity.
✅ View total price and number of items.
✅ Checkout and clear the cart.
✅ Responsive design with smooth UI.
✅ Deployed on GitHub Pages.

 Installation and Setup
1️⃣ Clone the Repository
First, clone the project to your local machine:

bash
Copy
Edit
git clone https://github.com/TanmayAmte/Paradise-Nursery.git
2️⃣ Navigate to the Project Directory
bash
Copy
Edit
cd Paradise-Nursery
3️⃣ Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy
Edit
npm install
⚙️ Running the App Locally
Start the development server by running:

bash
Copy
Edit
npm start
✅ The app will be available at:
👉 http://localhost:3000

🚀 Deploying to GitHub Pages
You can deploy this project using GitHub Pages by following these steps:

Install gh-pages (only once):
bash
Copy
Edit
npm install gh-pages --save-dev
Add the following lines to package.json:
json
Copy
Edit
"homepage": "https://TanmayAmte.github.io/Paradise-Nursery",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the app:
bash
Copy
Edit
npm run deploy
✅ Your app will be live at:
👉 https://TanmayAmte.github.io/Paradise-Nursery

🌿 Usage Guide
🛒 Shopping Cart
Add to Cart: Click the + button to add items to your cart.
Increment/Decrement Quantity:
Use the + button to add more of the same item.
Use the - button to reduce the quantity or remove the item.
Clear Cart:
Click the Clear Cart button to remove all items.
Checkout:
Click the Checkout button to simulate a successful purchase.
🌐 Navigation
Home Page: Includes a brief introduction about flowers with a Get Started button.
Shopping Cart: Displays all the added items, their quantity, total price, and checkout options.
Continue Shopping: Returns you to the home page.
📸 Screenshots
🌿 Landing Page

🛒 Shopping Cart

📦 Folder Structure
perl
Copy
Edit
Paradise-Nursery/
 ├── public/
 │    ├── images/            # Static images (flowers, cart, etc.)
 │    └── index.html          # HTML file
 │
 ├── src/
 │    ├── actions/            # Redux action files
 │    ├── components/         # React components
 │    ├── reducers/           # Redux reducers
 │    ├── App.js              # Main app component
 │    ├── index.js            # Entry point
 │    ├── style.css           # CSS file
 │    └── store.js            # Redux store configuration
 │
 ├── .gitignore               # Files to ignore in Git
 ├── package.json             # Project metadata and dependencies
 ├── README.md                # Project description and instructions
 ├── package-lock.json        # Dependency tree lock
 └── build/                   # Production build (created after `npm run build`)
✅ Environment Variables (Optional)
If your project uses any environment variables, add a .env.example file to your repository.
Example:

env
Copy
Edit
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_BASE_URL=YOUR_URL
⚙️ Known Issues
If you encounter src refspec main does not match any, you may need to create the main branch manually:
bash
Copy
Edit
git checkout -b main
git push origin main
🔥 Future Enhancements
🌿 Add product filtering and sorting.
🌿 Improve styling and animations.
🌿 Add flower categories and detailed product pages.
🌿 Integrate payment gateway simulation.
📜 License
This project is licensed under the MIT License.
Feel free to fork, modify, and use it! 😊

✅ This README.md provides clear instructions for cloning, running, and deploying the project while also making it easy for others to understand and use. 🚀
