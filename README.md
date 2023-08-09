# React Feedback App

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

<!--toc:start-->

- [React Feedback App](#react-feedback-app)
  - [Bug Fixes, corrections and code FAQ](#bug-fixes-corrections-and-code-faq)
    - [Q: Why are we spreading data and item?](#q-why-are-we-spreading-data-and-item)
    - [BUG: After editing a feedback it is not possible to add a feedback](#bug-after-editing-a-feedback-it-is-not-possible-to-add-a-feedback)
    - [BUG: Validation not working correctly on feedback input](#bug-validation-not-working-correctly-on-feedback-input)
    - [Q: How do you reset state after submitting a feedback?](#q-how-do-you-reset-state-after-submitting-a-feedback)
    - [Q: Why does the default rating of 10 not show?](#q-why-does-the-default-rating-of-10-not-show)
    - [BUG: About link icon shows in the wrong place with many feedback items](#bug-about-link-icon-shows-in-the-wrong-place-with-many-feedback-items)
- [Usage](#usage) - [Install dependencies](#install-dependencies) - [Run](#run)
<!--toc:end-->

### Bug Fixes, corrections and code FAQ

The repository code here on the main branch has been updated due to bugs and issues found by students since the course was released.
If you are looking for exact code from the course then please check out the [originalcoursecode branch](https://github.com/bradtraversy/feedback-app/tree/originalcoursecode) of this repository.

The updates here aim to be a reference and resource for common questions asked
by students in the Udemy Q&A and for those wishing to make corrections to the
project.

#### Q: Why are we spreading data and item?

Before implementing json-server, when we updated feedback we didn't have feedback
ID in the updItem so spreading both data and item merges the two objects so we
have all the properties. After changing the code to use json-server we can instead use the
data response from json-server which will have an ID. So spreading both data and
item are no longer necessary.

> Code changes can be seen in [FeedbackContext.js](src/context/FeedbackContext.js#L62)

#### BUG: After editing a feedback it is not possible to add a feedback

After we edit a feedback our `feedbackEdit.edit` state is still true meaning we
only ever edit the same feedback again even if it's a new feedback.
The simple solution is to reset feedbackEdit state after updating a feedback.

> Code changes can be seen in [FeedbackContext.js](src/context/FeedbackContext.js#L65)

#### BUG: Validation not working correctly on feedback input

`handleTextChange` should validate on the input value, not on state.
State will only have changed on the next render of the component, which
happens after we call `setText`. Our text state is not the current value of
the input so is not suitable for validating the users input. Additionally we don't need to check twice for an empty string.

Code changes can be seen in [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L24)

#### Q: How do you reset state after submitting a feedback?

Reset sate back to default after adding a new feedback.

> Code changes can be seen in [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L57)

#### Q: Why does the default rating of 10 not show?

Initially `feedbackEdit.item.rating` is **undefined**, so when RatingSelect first mounts we set local state in our useEffect to **undefined**, which is why the default rating of 10 does not show.
However there is no need for local state, useEffect or consuming context in this component as it's
just a duplicate of parent state. Relies on `selected` being passed as prop in [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L64)

Additionally here we can simplify our JSX with iteration.

> Code changes can be seen in [RatingSelect.jsx](src/components/RatingSelect.jsx#L2) and [FeedbackForm.jsx](src/components/FeedbackForm.jsx#L64)

#### BUG: About link icon shows in the wrong place with many feedback items

The about link icon container was positioned
absolute to the container meaning when lots of feedback's were added the icon
would appear off to the right and not at the bottom of the page.

> Code changes can be see in [index.css](src/index.css#L188)

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
