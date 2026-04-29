# todo-card-component
A responsive and accessible Todo Task Card built with HTML, CSS, and JavaScript. This integrates dynamic time-remaining calculation, semantic HTML, and testable elements using data-testid attributes.

## Project Overview

This project implements a single Todo Task Card component with a strong emphasis on structure, accessibility, and testability. It demonstrates how a simple user interface element can be developed using clean and maintainable code while following best practices in modern frontend development.

The component is designed to present task-related information in a clear and organized format, while remaining fully responsive and accessible across different devices and user interactions.

---

## Features

The Todo Task Card includes the following features:

* Display of task title and description
* Priority indicator (Low, Medium, High)
* Due date using a semantic `<time>` element
* Dynamic calculation of time remaining
* Status indicator (Pending or Done)
* Task tags or categories
* Action buttons for editing and deleting

In addition, the component supports interactive behavior through a completion toggle and provides clear visual feedback to the user.

---

## Time Calculation

The time remaining is calculated dynamically using JavaScript by comparing the current system time with a predefined due date. Based on this calculation, the application displays user-friendly messages such as:

* Due in a number of days or hours
* Due now
* Overdue

The time value is updated periodically to maintain accuracy.

---

## Testability

Each important element in the component includes a `data-testid` attribute. This ensures that automated testing tools can reliably identify and interact with elements without depending on styling or visible text content.

This approach improves stability and makes the component easier to test and maintain.

---

## Accessibility

Accessibility is considered throughout the implementation. The project includes:

* Use of semantic HTML elements such as `article`, `time`, and `button`
* Proper labeling of form controls
* Keyboard navigation support
* Visible focus indicators
* Appropriate use of ARIA attributes where needed

These practices ensure that the component is usable by a wide range of users, including those relying on assistive technologies.

---

## Responsiveness

The layout is designed using a mobile-first approach to ensure compatibility across different screen sizes:

* On smaller screens, the card spans the full width and uses a vertical layout
* On larger screens, the card is centered with a defined maximum width for improved readability
* Tags and content elements adjust naturally without causing layout overflow

---

## Technology Stack

* HTML5 for structure and semantics
* CSS3 for layout and responsive design
* JavaScript for logic and interactivity

No external libraries or frameworks are used.

---

## Project Structure

todo-card/
│
├── index.html
├── style-todo.css
└── script-todo.js

---

## Getting Started

To run this project locally:

1. Clone the repository:


git clone https://github.com/iyanuadeleye01/todo-card-component.git


2. Navigate into the project directory:


cd testable-todo-component


3. Open the `index.html` file in a web browser.

---

## Implementation Notes

* Time calculations are handled using the JavaScript `Date` object
* Millisecond values are converted carefully into hours and days
* Event listeners are used to manage user interactions
* The implementation avoids unnecessary complexity to maintain clarity and focus

---

## Future Improvements

Possible enhancements to this project include:

* Adding full edit functionality with a form interface
* Persisting task data using local storage
* Supporting multiple task cards
* Enhancing time precision with minute-level updates
* Introducing animations for better user experience

---

## Conclusion

This project focuses on building a simple component with a strong foundation in best practices. It highlights the importance of writing clean, accessible, and testable code, even for small user interface elements.

