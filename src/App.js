
import Plan from "./pages/Plan";
import Info from "./pages/Info"
import Addons from "./pages/Addons"

import Thanks from "./pages/Thanks"
import Summary from "./pages/Summary"
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Info/>} />
        <Route path="/plan" element={ <Plan/>} />
        <Route path="/addons" element={ <Addons/>} />
        <Route path="/summary" element={ <Summary/>} />
        <Route path="/thanks" element={ <Thanks/>} />
      </Routes>

    </div>
  );
}

export default App;
