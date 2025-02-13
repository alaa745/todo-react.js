import AppContent from "./AppContent";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoListContextProvider } from "./contexts/TodoListContext";



function App() {



  return (
    <TodoListContextProvider >
      <AppContent />
    </TodoListContextProvider>
  )
}

export default App
