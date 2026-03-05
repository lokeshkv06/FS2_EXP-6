# Experiment 2 – Client-Side Form Validation (React)

## Aim

To validate form inputs on the **client side before submission** using React.

---
<img width="589" height="581" alt="Screenshot 2026-03-05 151959" src="https://github.com/user-attachments/assets/a29226bc-1dbb-4df7-8736-1a0e9926f304" />
<img width="595" height="532" alt="Screenshot 2026-03-05 151954" src="https://github.com/user-attachments/assets/a8d4084d-f487-4d64-b5c2-599004ad5857" />
<img width="588" height="556" alt="Screenshot 2026-03-05 151932" src="https://github.com/user-attachments/assets/6be22659-d280-4df5-a0c5-d24b5d6f665c" />
<img width="618" height="557" alt="Screenshot 2026-03-05 151924" src="https://github.com/user-attachments/assets/496da0de-b307-4285-8371-e330fb5cb734" />

## Software Requirements

* Node.js
* React.js
* VS Code
* Web Browser

---

## Theory

Client-side validation ensures that user input is **validated in the browser before sending data to the server**. It helps improve user experience by providing **instant feedback** and reducing unnecessary server requests.

In React, validation can be implemented using **state management with hooks such as `useState`**. Each input field is monitored, and validation rules are applied dynamically. Error messages are displayed when the input does not satisfy the required conditions.

This approach improves **data correctness, security, and usability** in web applications.

---

## Features Implemented

* Email validation using **Regular Expressions**
* Password validation rules:

  * Must start with a **capital letter**
  * Must contain **at least one number**
  * Must contain **one special character**
  * Minimum **5 characters length**
* Real-time validation feedback
* Password **show/hide toggle**
* Disabled submit button until inputs are valid
* Reset button to clear form inputs
* Success message after valid submission

---

## Form Fields

The Login Form includes:

* Email input field
* Password input field
* Submit button
* Reset button

---

## Validation Rules

### Email Validation

* Must follow the format:
  **[username@domain.com](mailto:username@domain.com)**

### Password Validation

The password must satisfy the following conditions:

* Start with a **capital letter**
* Contain **at least one number**
* Contain **at least one special character**
* Minimum **5 characters**

If the conditions are not met, **error messages are displayed dynamically**.

---

## Procedure

1. Create a React application.
2. Design a login form UI.
3. Use **useState hook** to store email and password values.
4. Apply validation rules using **Regular Expressions**.
5. Display validation messages dynamically.
6. Disable the submit button until inputs are valid.
7. Add functionality for password visibility toggle.
8. Implement reset functionality to clear the form.

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
client-side-validation
│
├── src
│   ├── App.jsx        # Login form with validation
│   ├── App.css        # Styling
│   ├── index.css      # Global styles
│   ├── main.jsx       # React entry point
│
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/client-side-validation.git
```

### 2. Navigate to the project directory

```
cd client-side-validation
```

### 3. Install dependencies

```
npm install
```

### 4. Run the project

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Output

A **Secure Login Form** that performs **real-time client-side validation** for email and password before allowing submission.

---

## Author

**KV Lokesh**
B.Tech CSE (AI & ML)

---

## License

This project is created for **academic and educational purposes**.
