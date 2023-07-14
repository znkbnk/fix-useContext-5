This project contains a React component tree with 
intentional mistakes in using useState, useContext,
and useEffect hooks - by fixing these errors,
you will gain experience and familiarity with proper
usage of React hooks for state management and data flow.

Mistake 1: Forgetting to call useEffect hook

Explanation: The useEffect hook allows you to perform 
side effects in a React component. Forgetting to call
it means your side effects won't run.
Fix: Import useEffect from 'react' at the top of
the component file. 

Mistake 2: Forgetting to call useEffect in Component1

Explanation: Even though useEffect is imported in
Component1, it still needs to be called inside the
component function to run side effects. Forgetting to
call useEffect means those side effects won't execute.
Fix: In the Component1 function body, 
add a useEffect hook.

Mistake 3: Updating state incorrectly in a component

Explanation: When using React state, it should only
be updated via the state updater function, not directly
mutated. Updating state directly instead of using the
setter function can lead to bugs.
Fix: Use the state setter function to update the
state properly.

Mistake 4: Updating state directly instead of using
state setter in handleLogin()

Explanation: In the handleLogin() function, the user
state is being mutated directly instead of using the
setUser state setter function. This can lead to bugs.
Fix: Update the user state using the setUser function.

Mistake 5: Forgetting to wrap components in
Context Provider

Explanation: To allow nested components to consume a
React context, the components need to be wrapped in the
context Provider component. Forgetting to do this will
prevent child components from accessing the context values.
Fix: Wrap Component1 and Component2 in UserContext.Provider.

