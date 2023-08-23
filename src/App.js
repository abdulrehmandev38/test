import "./App.css";
import { View } from "./pages";
import { ContextProvider } from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <View />
    </ContextProvider>
  );
}

export default App;
