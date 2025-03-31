import { Route, Routes, Router } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero.jsx'
import AppointmentPage from './components/AppointmentPage.jsx'
import { UserProvider } from './UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

function App() {
	return (
		<div>
			<Provider store={store}>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path="/appointmentBooker" element={<AppointmentPage />} />
					</Routes>
				</UserProvider>
			</Provider>
		</div>
	)
}

export default App
