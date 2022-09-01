import CakeView from './features/cake/CakeView'
import IcecreamViews from './features/icecream/IcecreamViews'
import UserView from './features/user/UserView'


function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamViews />
      <UserView />
    </div>
  );
}

export default App;
