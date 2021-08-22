import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const max = Math.max(...props.dataPoints.map(datapoint => datapoint.value));

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={max}
                    label={dataPoint.label}
                />)}
        </div>
    );
};

export default Chart;