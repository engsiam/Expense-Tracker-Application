# Expense Tracker Application 🧾💸

> A sleek and simple **Expense Tracker** built with **Vanilla JavaScript** and styled using **Tailwind CSS**. Track your expenses, view a list of past entries, and enjoy dynamic background changes with data fetched from the **Pexels API**. Designed for a great user experience with **responsive design**, **glassmorphism effects**, and **toastr notifications**.

## 🚀 Features

### 🌟 Dynamic Background with Pexels API
- The background of the application changes every time the page is reloaded.
- Beautiful high-quality nature images are fetched from the Pexels API.
  
### 📝 Expense Management
- **Add Expenses**: Quickly add new expenses with an intuitive form.
- **View Expense List**: See a running list of all your expenses, complete with names and amounts.
- **Edit Expenses**: Edit any expense entry directly from the list.
- **Delete Expenses**: Remove an expense from the list with a single click.
  
### 🛠️ Built with:
- **Vanilla JavaScript** for core logic.
- **Tailwind CSS** for responsive and modern UI design.
- **Toastr.js** for sleek and interactive notifications.
- **LocalStorage** for data persistence so that your expenses are saved even after refreshing the page.

### 🌈 UI Features
- **Glassmorphism Form**: Enjoy a modern UI with glass-like transparency and blur effects.
- **Gradient Text**: Beautiful, eye-catching gradient text for headings.
- **Responsive Design**: Works flawlessly on both desktop and mobile devices.
  
## 📹 Watch the Video Tutorial

![Expense Tracker Demo](https://s6.ezgif.com/tmp/ezgif-6-70e1c3c9c6.gif)

## 💻 How to Use

### Prerequisites
Ensure you have a modern browser that supports **JavaScript ES6**.

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/engsiam/Expense-Tracker-Application
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```

3. Open the `index.html` file in your browser to start using the app:
    ```bash
    open index.html
    ```

4. The application will load with a random nature background image fetched from the Pexels API.

### API Configuration
To fetch background images from the **Pexels API**, you will need to add your API key directly to the code (or use a backend solution for security).

1. Create a free account at [Pexels](https://www.pexels.com/api/).
2. Get your API key.
3. Add the API key to the `API_KEY` constant in the JavaScript file:
    ```javascript
    const API_KEY = 'your-api-key-here';
    ```

### Usage

- Add an expense by entering the **expense name** and **amount**, then clicking the `Add Expense` button.
- You can **edit** or **delete** any entry from the expense list.
- The list is saved in **LocalStorage**, so it will persist even after refreshing or closing the browser.


**Video Link Added**: A new section "📹 Watch the Video Tutorial" was added with the YouTube link: [Build a Dynamic Expense Tracker](https://youtu.be/SXYdBaZ4WFk).



