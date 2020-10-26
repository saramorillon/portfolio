import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBook,
  faBriefcase,
  faCalendarAlt,
  faGamepad,
  faHeart,
  faLaptopCode,
  faMusic,
  faSpinner,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import { App } from './App'

library.add(faBriefcase, faHeart, faCalendarAlt, faLaptopCode, faBook, faGamepad, faMusic, faStar, faSpinner)

ReactDOM.render(<App />, document.getElementById('root'))
