# User Flow

A simple React app to create and manage users through a modal form, with client-side validation and a dynamic list view.

## Features

- Add new users via a modal form (Full Name, Email ID)
- Client-side validation for required fields and email format
- Users displayed as cards in a responsive list
- 🚧 Coming soon: edit users, delete users, persist data (localStorage)

## Tech Stack

- React
- Tailwind CSS
- lucide-react (icons)

## Project Structure

src/
├── components/
│ ├── Form.jsx # Add user modal + validation
│ ├── UserData.jsx # Renders list of user cards
│ └── NavBar.jsx # Top navigation with "Create User" button
└── App.jsx # Root component, manages shared state
