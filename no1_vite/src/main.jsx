import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return (
      <div>
          <h1>Custom App</h1>
      </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit</a>
)
const users="me and me"
const ReactElement= React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me',
  users
)

createRoot(document.getElementById('root')).render(
  ReactElement
)
