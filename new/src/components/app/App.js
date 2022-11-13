import '../../style/App.css';
import { Chart } from 'react-google-charts';

export const data = [
  ["Task", "Hours per Day"],
  ["Html", 3],
  ["CSS", 3],
  ["Javascript", 7],
  ["React", 6],
];

export const options = {
  title: "Frontend study",
};

function App() {
  return (
    <div className="App">
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
    />
    </div>
  );
}

export default App;
