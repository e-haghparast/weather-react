import Search from "./search.js";
export default function App() {
  return (
    <div className="container pt-5">
      <div className="wrapper">
        <div className="App border w-50 pt-4">
          <Search />
        </div>
      </div>
      <p className="mt-2">
        <a href="https://github.com/e-haghparast/weather-react" target="-blank">Open-source</a> code, by Elnaz Haghparast
      </p>
    </div>
  );
}
