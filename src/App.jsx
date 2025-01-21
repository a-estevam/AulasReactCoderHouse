import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Menu from "./components/Menu/Menu"
import NovoComponenten from "./components/NovoComponente/NovoComponente"


function App() {

  return (
    <>
      <Menu/>
      <ItemListContainer greeting='Bem-vindos'/>    
      <ItemDetailContainer/>

      

    </>
  )
}

export default App
