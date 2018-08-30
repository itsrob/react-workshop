import React from 'react'
import Navigation from '../Navigation'
import Router from '../Router'

const pages = [
  {title: 'Hello World', url: '/HelloWorld'},
  {title: 'Simple Props', url: '/SimpleProps'},
  {title: 'Complete props', url: '/CompleteProps'},
  {title: 'React Children', url: '/Children'},
  {title: 'Events', url: '/Events'},
  {title: 'Lifecycle', url: '/Lifecycle'},
  {title: 'Stateful components', url: '/State'},
  {title: 'State management', url: '/StateManagement'},
  {title: 'Higher-order functions', url: '/HigherOrder'},
  {title: 'Styling', url: '/Styling'},
  {title: 'Your Move', url: '/YourMove'},
  {title: 'What’s next?', url: '/Next'},
  {title: 'About us', url: '/About'}
]

const App = () => (
  <div>
    <Navigation pages={pages}/>
    <Router />
  </div>
)

export default App
