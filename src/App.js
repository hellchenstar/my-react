/*
 * @Author: chenx
 * @Descripttion:
 * @Date: 2022-08-05 11:45:10
 * @LastEditors: chenx
 * @LastEditTime: 2022-08-05 15:10:08
 */
import "./App.css";
import "./container/index.css";
import Headers from "./container/headers/headers.js";
import Content from "./container/content/content.js";
import Footer from "./container/footer/footer.js";
function App() {
  return (
    <div className="App">
      <Headers test="abc"></Headers>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
