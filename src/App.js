import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>

          <Route path='/about' component={AboutPage} />

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
