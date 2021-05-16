import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  // axios.defaults.headers.common = "Access-Control-Allow-Headers:*";
  // axios.defaults.headers.common = "Access-Control-Allow-Origin:*";
  // axios.defaults.headers.common = "Access-Control-Allow-Credentials:true";
  const getClick = () => {
    console.log("get클릭");
    axios.get("http://localhost:4000/").then((res) => {
      console.log(res.data);
    });
  };
  const postClick = () => {
    console.log("post클릭");
    axios.post("http://localhost:4000/cookie").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <button onClick={getClick}>get</button>
      <button onClick={postClick}>post</button>
    </div>
  );
}

export default App;
