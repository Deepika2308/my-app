import React, { useState,createContext,useContext } from "react";
import "./styles.css";

let context = createContext(null);

export default function App() {
  let [mode, setMode] = useState("Light");

  const styles = { background: mode === "Light" ? "black" : "white" };
  return (
  <context.Provider value={[mode,setMode]}>
    <div style={styles} className="App">
      <List style={styles} />
    </div>
  </context.Provider>  
  );
}

const List = () => (
  <ul>
    <ListItem value="Light 💡"  />
    <ListItem value="Dark 🌙"  />
  </ul>
);

const ListItem = ({value}) => (
  <li>
    <Button value={value}  />
  </li>
);

const Button = ({ value }) => {

  let [mode,setMode] = useContext(context);
  console.log(mode);

  let styles = { background : mode==="Dark" ? "black" : "white" , 
                color : mode==="Dark" ? "white" : "black"};
  return (
    <button style={styles} onClick={() => setMode(value === "Light 💡" ? "Light" : "Dark")} >
      {value}
    </button>
  );
};
