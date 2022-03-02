import "./App.css";
import FullName from "./Components/Profile/FullName/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto/ProfilePhoto";

import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./Components/Profile/Address/Address";
import Restaurant from "./Components/Profile/Restaurant";

function App() {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Address />

      <div>
        <Restaurant food="Sandwich" />
        <Restaurant food="Pizza" />
        <Restaurant food="Salad" />
      </div>
    </div>
  );
}

export default App;
