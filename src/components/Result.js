import { PieChart } from 'react-minimal-pie-chart';

const Result = () => {
    return ( 
        <div className="result-content">
            <h1>Result</h1>
            
            <PieChart
            className = "pie-chart"
            radius = {50}
            lineWidth = {60}
            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            />;

        </div>
     );
}
 
export default Result;