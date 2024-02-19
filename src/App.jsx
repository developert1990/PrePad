import { PrePadRouter } from "./router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div id="main-section">
          <PrePadRouter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
