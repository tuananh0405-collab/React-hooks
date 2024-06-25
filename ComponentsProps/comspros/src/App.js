import Card from "./components/Card";

function App() {
  const data = {
    name1:"Nguyen Van A",
    position: "Nhan vien kinh doanh",
    dob:"19/05/1992",
    phone:"(024) 6680 5588",
    email:"hotro@topvc.vn",
    fb:"https://www.facebook.com",
    address:"So 10, Duong 10, TopCV",
    sex:"Male"
  }
  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
