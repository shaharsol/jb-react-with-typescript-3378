# what is Redux?

Redux is a global state management system
it allows us to define the data that we want to use as state,
the actions that we want to invoke on the data
the logic of how to manage the data for each action
and to subscribe to changes in global state, so we can affect the local component state.

# implementation

Redux comes in 3 flavors

- redux core. the basic redux library with all it's API. suitable for any framework, any platform as long as it works in JS (react, angular, vue, vanilla JS)
- redux toolkit. a library that is based on redux core, but provides a much more convinient API
- react-redux. Binding of the redux toolkit into the UI

# terminology

- store - the entire datastore of all the app global state
- slice - a specific state from within the store
- action type - a specific operatin type that i can invoke on a slice (addProduct, deleteProduct)
- payload - the data that can be sent with each action type
- actions - binding of action type and payload
- reducers - function that we must implement , that describes how the existing state changes to reflect the action type. we will never invoke reducers ourselves.
- dispatch - our way of letting redux know about a new action. whenever we dispatch, redux chooses the relevant reducer to reduce to a new state


