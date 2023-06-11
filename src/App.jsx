import Navbar from "./components/Navbar/Navbar";
import style from './App.module.css'

 const App = () => {
  return (
    <div className={style.darkMode}>
      <Navbar />
    </div>
  );
};

export default App