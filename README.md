# React Feedback App - Bug Fixes

This is a project from my React Front To Back 2022 course. It allows users to add, update and delete feedback. It uses a mock REST api with json-server.

This project goes over all of the fundamentals of React including...

- Components
- JSX
- Props (proptypes, defaultprops, etc)
- State (Component & App Level)
- Styling
- Handling Events
- Lists & Keys
- Forms
- Context API
- HTTP Requests

---

## 🐛 This is the bugfix branch of the repository

This branch aims to address the bugs and issues found by students taking the course and
provides fixes and solutions.

### Issues found so far

- [FeedbackContext.js](src/context/FeedbackContext.js#L62)
  No need to spread data and item as we have the id in the data response from our
  json-server.
- [FeedbackContext.js](src/context/FeedbackContext.js#L65)
  After editing a feedback it is not possilbe to add a new feedback, we just need
  to reset the feedbackEdit state.
- [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L24)
  handleText change should validate on the input value, not on state.
  State will only have changed on the next render of the component, which
  happens after we call setText. So our text state is not the current value of
  the input. Additionally we don't need to check twice for an empty string.
- [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L57)
  Reset to default state after submitting a feedback.
- [RatingSelect.jsx](src/components/RatingSelect.js#L2)
  No need for local state, useEffect or consuming context in this component as it's
  just a duplicate of parent state. Relies on `selected` being passed as prop in [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L64)
- [FeedbackStats.jsx](src/components/FeedbackStats.jsx#L7)
  Simplify average rating calculation without regex.
- [RatingSelect.jsx](src/components/RatingSelect.jsx#L12)
  Simplify rendering radio buttons with iteration.

---

# Usage

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run dev
```

This will run JSON-server on port :5000 and React on port :3000
