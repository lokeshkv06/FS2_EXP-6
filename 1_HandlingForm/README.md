# Experiment 1 – Handling Forms Using Controlled Components (React)

## Aim

To create and handle forms in a frontend application using **controlled components in React**.

---
<img width="607" height="928" alt="Screenshot 2026-03-05 151210" src="https://github.com/user-attachments/assets/f4ea5e6f-670d-40f3-a8b8-62a61f4a1398" />
<img width="613" height="924" alt="Screenshot 2026-03-05 151200" src="https://github.com/user-attachments/assets/12e5f96f-75cb-44d3-bbf3-81bd9058de35" />
<img width="613" height="934" alt="Screenshot 2026-03-05 151149" src="https://github.com/user-attachments/assets/2d99e6f4-9282-46fe-b465-7abc0de57ff9" />
<img width="615" height="930" alt="Screenshot 2026-03-05 151139" src="https://github.com/user-attachments/assets/322c8000-a7fb-41c4-9ac4-f0843f12c874" />
<img width="612" height="933" alt="Screenshot 2026-03-05 151130" src="https://github.com/user-attachments/assets/8636f4ad-267a-47e2-8bca-fd2c47977b42" />
<img width="616" height="939" alt="Screenshot 2026-03-05 151120" src="https://github.com/user-attachments/assets/fccff6c3-2b38-4f20-abf3-bb8b76483783" />
<img width="626" height="942" alt="Screenshot 2026-03-05 151054" src="https://github.com/user-attachments/assets/eccc5b5b-3a76-416c-ab8f-952cb7b3a0e2" />
<img width="637" height="929" alt="Screenshot 2026-03-05 151044" src="https://github.com/user-attachments/assets/8bb654e2-0ab6-4858-91d4-b61f0e1a62c0" />
<img width="604" height="853" alt="Screenshot 2026-03-05 151030" src="https://github.com/user-attachments/assets/03d249e1-6e44-4e58-94b6-88c05fe518f8" />


## Software Requirements

* Node.js
* React.js
* VS Code
* Web Browser

---

## Theory

Controlled components are React components in which **form data is handled by the component’s state**.
The value of input elements such as text fields, checkboxes, radio buttons, and select dropdowns is controlled by React using state variables.

In controlled components:

* React state becomes the **single source of truth**.
* Form inputs update the state using **event handlers**.
* The UI automatically updates whenever the state changes.

This approach provides **better control, validation, and data management** in React applications.

---

## Features Implemented

* Controlled form inputs using **React `useState`**
* Input validation before form submission
* Multiple input types:

  * Text fields
  * Dropdown (Select)
  * Checkboxes
  * Radio buttons
  * Textarea
  * Date picker
* Reset functionality to clear the form
* User-friendly UI with modern styling

---

## Form Fields

The Student Registration Form includes the following fields:

* First Name
* Last Name
* State (Dropdown)
* Skills (Checkbox Selection)
* Gender (Radio Buttons)
* Address (Textarea)
* Date of Birth
* Submit Button
* Reset Button

---

## Validation Rules

The following validations are implemented:

* First Name cannot be empty
* Last Name cannot be empty
* State must be selected
* At least **one skill must be selected**
* Gender must be selected
* Address cannot be empty
* Date of Birth must be selected
* Date of Birth **cannot be a future date**

If validation fails, an **alert message** is displayed.

---

## Procedure

1. Create a React application.
2. Design a form component.
3. Use **useState** to store form input values.
4. Handle input change events.
5. Implement validation logic for each field.
6. Handle form submission using an event handler.
7. Implement a reset function to clear the form.
8. Apply CSS styling for better UI.

---

## Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3
* React Hooks (`useState`)

---

## Project Structure

```
student-registration-form
│
├── src
│   ├── App.jsx        # Main form component
│   ├── App.css        # Styling for the form
│   ├── index.css      # Global styles
│   ├── main.jsx       # React entry point
│
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/student-registration-form.git
```

### 2. Navigate to the project directory

```
cd student-registration-form
```

### 3. Install dependencies

```
npm install
```

### 4. Run the project

```
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## Output

A **Student Registration Form** that collects user details and validates input fields using React controlled components.

---

## Author

**KV Lokesh**
B.Tech CSE (AI & ML)

---

## License

This project is created for **educational and academic purposes**.
