import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
// promise must be above function
// countries e promise pathate hobe
const countriesPromise = fetch(
  "https://restcountries.com/v3.1/independent?status=true"
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<h3>Joy vai going...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
