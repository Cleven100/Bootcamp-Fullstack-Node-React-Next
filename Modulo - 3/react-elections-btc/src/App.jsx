import ElectionsPage from './pages/ElectionsPage'

export default function App() {
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">react-elections</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <ElectionsPage />
        </div>
      </main>
    </div>
  )
}
