const reactQuizQuestions = [
  {
    question: "What is React primarily used for?",
    options: [
      "Data management",
      "Backend development",
      "Building user interfaces",
      "Database management",
    ],
    answer: "Building user interfaces",
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript Syntax Extension",
      "JavaScript XML",
      "JavaScript Execution",
      "Java Source Extension",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "How many types of components are there in React?",
    options: ["One type", "Two types", "Three types", "Four types"],
    answer: "Two types",
  },
  {
    question:
      "What is the main difference between 'state' and 'props' in React?",
    options: [
      "State is mutable, props are immutable",
      "Props are mutable, state is immutable",
      "Both are immutable",
      "Both are mutable",
    ],
    answer: "State is mutable, props are immutable",
  },
  {
    question:
      "Which of the following is used to handle data that changes over time in React?",
    options: ["Props", "State", "Component", "Render"],
    answer: "State",
  },
  {
    question: "What is the purpose of the 'useEffect' hook in React?",
    options: [
      "To manage component state",
      "To handle side effects in functional components",
      "To create class components",
      "To handle events",
    ],
    answer: "To handle side effects in functional components",
  },
  {
    question:
      "Which lifecycle method is called when a component is first added to the DOM?",
    options: [
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidMount",
      "shouldComponentUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    question: "What is the correct syntax to import React in a file?",
    options: [
      "import React from 'react';",
      "require(React);",
      "import from 'React';",
      "import ReactModule from 'react';",
    ],
    answer: "import React from 'react';",
  },
  {
    question: "What is Redux used for in React applications?",
    options: [
      "Managing component styling",
      "Managing application state",
      "Handling component lifecycle",
      "Rendering components",
    ],
    answer: "Managing application state",
  },
  {
    question:
      "Which hook is commonly used for accessing the state in a functional component?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    answer: "useState",
  },
  {
    question: "What does the 'key' prop help with in lists?",
    options: [
      "To set component state",
      "To handle events",
      "To identify list items uniquely",
      "To add CSS styles",
    ],
    answer: "To identify list items uniquely",
  },
  {
    question: "What does the 'useReducer' hook help with?",
    options: [
      "Handling side effects",
      "Replacing Redux for complex state management",
      "Creating new components",
      "Modifying props",
    ],
    answer: "Replacing Redux for complex state management",
  },
  {
    question: "What will be the output of 'console.log(typeof React)'?",
    options: ["'object'", "'function'", "'string'", "'undefined'"],
    answer: "'object'",
  },
  {
    question: "Which hook is used to access context in a functional component?",
    options: ["useContext", "useRef", "useMemo", "useCallback"],
    answer: "useContext",
  },
  {
    question: "What does the 'useRef' hook do?",
    options: [
      "Access DOM elements directly",
      "Manage component lifecycle",
      "Handle state changes",
      "Create event listeners",
    ],
    answer: "Access DOM elements directly",
  },
  {
    question: "Which method is used to update the state in a class component?",
    options: ["setState", "updateState", "changeState", "this.update"],
    answer: "setState",
  },
  {
    question: "In React Router, which component is used to define a route?",
    options: ["Router", "Route", "Link", "Switch"],
    answer: "Route",
  },
  {
    question: "What does the 'React.Fragment' component do?",
    options: [
      "Adds a wrapping div",
      "Allows multiple elements to be grouped without extra DOM node",
      "Adds an HTML comment",
      "Creates a new component",
    ],
    answer: "Allows multiple elements to be grouped without extra DOM node",
  },
  {
    question: "What does the 'useMemo' hook optimize?",
    options: [
      "State management",
      "Re-rendering of components",
      "Side effects",
      "Lifecycle methods",
    ],
    answer: "Re-rendering of components",
  },
  {
    question:
      "Which hook is used to define lifecycle methods in functional components?",
    options: ["useEffect", "useState", "useRef", "useReducer"],
    answer: "useEffect",
  },
];
export default reactQuizQuestions;
