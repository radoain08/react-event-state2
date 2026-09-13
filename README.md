# Dev Stack Builder

Dev Stack Builder is a simple React website where users can explore different development technologies and build their own technology stack. The technologies are loaded from a JSON file and users can add or remove technologies from their stack.

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Vite
- React-Toastify
- JSON

## Features

- Browse different frontend, backend, database, language, and other development technologies.
- Add technologies to your own stack and remove them whenever needed.
- Get toast notifications when adding, removing, or clearing technologies.

## React Questions & Answers

1. What is JSX? Why do we use it?

JSX is a syntax used in React that lets us write HTML-like code inside JavaScript. It makes the UI code easier to read and understand. We use JSX to create the structure of React components.

2. What is the difference between State and Props?

Props are used to pass data from a parent component to a child component. State is used to store data that can change inside a component. Props are received from outside, while state is managed by the component itself.

3. What is the useState hook? How does it work?

useState is a React hook that is used to store and update data in a component. It gives us a state value and a function to update that value. In this project, I used useState for the selected technology stack, menu, technologies data, and loading state.

4. What is the useEffect hook? Why do we use it?

useEffect is used to perform some actions after a component renders. It is useful for things like fetching data or running code when something changes. In this project, I used useEffect to load the technology data from the JSON file.

5. Why do we need a unique key for each item in a list?

A unique key helps React identify each item in a list. It helps React understand which item has changed, been added, or removed. In this project, I used the technology id as the key for the technology cards.

6. What is conditional rendering? How is it used in your project?

Conditional rendering means showing different content based on a condition. In my project, I used it to show a loading message while the JSON data is loading. I also used it to show an empty message when no technology has been added to the stack.

7. How do you pass data from a parent component to a child component? How can a child send data back?

A parent component can send data to a child component using props. The child can send data back by calling a function passed from the parent as a prop. This allows the parent component to handle the data or action from the child.