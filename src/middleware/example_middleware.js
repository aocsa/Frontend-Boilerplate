// ////////////////////////////////////////////////////////////////////
// //// Example Redux MiddleWare /////////////////////////////////////
// //////////////////////////////////////////////////////////////////

// This middleware is added in Redux Store , middlewares array.
// What this particular middleware does is: wait in the middle when actions are dispatched:
// For every action, it checks if there is a payload, and checks if the payload as a .then() prototype method, ie: IT'S A PROMISE
// If not, it returns to end the quick the function and next's the action, so it can pass through.
// If promise (or a weird payload which has a then: ()=> {} method, it first resolves a data: {users: 'something'} off the promise
// it then constructs a new action with the resolved promise, and dispatches it again. So the action goes back to the beginning of middlewares array and starts passing through them, this time skipping this one and reacing the reducer (or other middlewares placed after this.)

/*
const Async = ({ dispatch }) => next => async (action) => {
  // no payload, not promise
  if (!action.payload || !action.payload.then) {
    // NOT PROMISE, OR NO PAYLOAD, NEXT()
    return next(action);
  }
  const { data: USERS } = await action.payload;
  const newAction = { ...action, payload: USERS };
  dispatch(newAction); // SEND IT AGAIN FROM BEGINNING, TO BE NEXT()'ed.
};

export default Async;


*/
