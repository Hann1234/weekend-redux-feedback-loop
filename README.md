# REDUX FEEDBACK LOOP

I created a reflection/feedback form that cycles the user through four feedback pages (feelings, understanding, support, comments), a review, and a thank you page. The review page displays the current feedback values and a submit button. When all steps are complete, the app saves the feedback in the database. The values are cleared upon submission and the user can go through the feedback loop again if they click "Leave New Feedback" on the thank you page.

## Description

I used npm, react-redux, redux-logger, and react-router-dom. I created components that connect values via dispatching them to the global state then selecting them with useSelector, and display for the user using routers and useHistory.  I POST the feedback to the database using axios and express.  


[Project Instructions](./INSTRUCTIONS.md)
Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
