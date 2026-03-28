import './App.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import WorkOrdersPage from './pages/WorkOrdersPage'

function App() {


  return (
    <>
  <div className="flex h-screen bg-gray-50">
      <Sidebar/>
 
      <div className="flex flex-col flex-1 overflow-hidden ml-7 mt-2.5">
        <Header/>
        <WorkOrdersPage/>
      </div>
    </div>
    </>
  )
}

export default App
