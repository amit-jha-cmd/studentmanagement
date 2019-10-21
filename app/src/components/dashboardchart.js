import React from 'react';
import {Chart} from 'react-google-charts';

const dashboardchart = (props) => {
    function Whattorender(props) {
        console.log(props);
        if (props.whatchart === "pie"){
            return <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        }
        else if(props.whatchart === "dashboard"){
            return <Chart
            width={'100%'}
            height={'100%'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Name', 'Age'],
              ['Michael', 12],
              ['Elisa', 20],
              ['Robert', 7],
              ['John', 54],
              ['Jessica', 22],
              ['Aaron', 3],
              ['Margareth', 42],
              ['Miranda', 33],
            ]}
            rootProps={{ 'data-testid': '6' }}
            chartPackages={['corechart', 'controls']}
            render={({ renderControl, renderChart }) => {
              return (
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '40%' }}>{renderControl(() => true)}</div>
                  <div style={{ width: '60%' }}>{renderChart()}</div>
                </div>
              )
            }}
            controls={[
              {
                controlType: 'StringFilter',
                options: {
                  filterColumnIndex: 0,
                  matchType: 'any', // 'prefix' | 'exact',
                  ui: {
                    label: 'Search by name',
                  },
                },
              },
              {
                controlType: 'NumberRangeFilter',
                controlID: 'age-filter',
                options: {
                  filterColumnIndex: 1,
                  ui: {
                    labelStacking: 'vertical',
                    label: 'Age Selection:',
                    allowTyping: false,
                    allowMultiple: false,
                  },
                },
              },
            ]}
          />
        }
        else {
            return null;
        }
    }
    return(
        <Whattorender whatchart={props.whatchart}/>
    );
}

export default dashboardchart;