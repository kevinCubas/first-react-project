import './App.css'
import Info from './components/Info'
import About from './components/About-interests'
import Footer from './components/Footer'

export default function App() {
  return (
      <main className="card">
          <Info />
          <About />
          <Footer />
      </main>
  )
}

