# odin-todo-list

## Key Coding Concepts

### 1. Modular JavaScript
This project is structured using modular JavaScript, where different functionalities are separated into individual modules. This helps in organizing the code better and makes it more maintainable. The main modules in this project are:
- `index.js`: The entry point of the application.
- `project.js`: Manages project-related functionalities.
- `tasks.js`: Handles task-related operations.
- `storage.js`: Deals with storing and retrieving data from `localStorage`.

### 2. Webpack
Webpack is used as the module bundler for this project. It helps in bundling JavaScript files and other assets for the browser. The configuration is defined in `webpack.config.js`, which includes:
- Entry and output settings.
- Plugins like `HtmlWebpackPlugin` for generating the HTML file.
- Loaders for handling CSS, HTML, and image files.

### 3. Local Storage
The project uses the `localStorage` API to persist data across browser sessions. This includes storing tasks and projects. Functions like `storeTask`, `saveTask`, and `deleteTask` in `storage.js` handle the interaction with `localStorage`.

### 4. Event Handling
Event handling is extensively used to manage user interactions. For example:
- Adding and deleting tasks.
- Submitting project titles.
- Switching between projects.

### 5. DOM Manipulation
The project involves significant DOM manipulation to dynamically update the UI based on user actions. This includes:
- Creating and appending new task cards.
- Updating project titles.
- Handling form submissions and dialog interactions.

### 6. CSS for Styling
The project uses CSS for styling the application. The styles are defined in `styles.css` and include custom properties (CSS variables) for colors and other design elements.

### 7. HTML Templates
HTML templates are used to define the structure of the application. The main template is `template.html`, which includes placeholders for dynamic content like tasks and projects.

### 8. Import and Export
JavaScript ES6 import and export statements are used to share functionalities between different modules. For example:
- `import { handleProjectTitleSubmit, loadProjects } from "./project.js";`
- `export { storeTask, saveTask, deleteTask };`

By understanding these key concepts, you can get a better grasp of how the project is structured and how different parts of the code interact with each other.
