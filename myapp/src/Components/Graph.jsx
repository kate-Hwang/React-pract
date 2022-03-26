import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
//빨간색
const data1 = [
    { quarter: 1, earnings: 21000 },
    { quarter: 2, earnings: 30000 },
    { quarter: 3, earnings: 28000 },
    { quarter: 4, earnings: 25000 },
    { quarter: 5, earnings: 28000 },
    { quarter: 6, earnings: 38000 },
    { quarter: 7, earnings: 15000 },
    { quarter: 8, earnings: 20000 },
  ];
  //파랑색
  const data2 = [
    { quarter: 1, earnings: 33000 },
    { quarter: 2, earnings: 43000 },
    { quarter: 3, earnings: 28000 },
    { quarter: 4, earnings: 15000 },
    { quarter: 5, earnings: 73000 },
    { quarter: 6, earnings: 26000 },
    { quarter: 7, earnings: 18000 },
    { quarter: 8, earnings: 33000 },
  ];
  //빨간색
  const data3 = [
    { quarter: 1, earnings: 1000 },
    { quarter: 2, earnings: 800 },
    { quarter: 3, earnings: 1000 },
    { quarter: 4, earnings: 800 },
    { quarter: 5, earnings: 1000 },
    { quarter: 6, earnings: 800 },
    { quarter: 7, earnings: 1000 },
    { quarter: 8, earnings: 800 },
  ];

  const data4 = [{ quarter: 1, earnings: 2000 }];
//   const data5 = [{ quarter: 1, earnings: 6000 }];


const Graph = () => {
    return(
        <>
            <div className="Current__Graph__Wrap">
                <div className="graph-cover">
                    <h2>Victory Test Graph - stack 그래프</h2>
                    
                    <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
                        <VictoryAxis
                        // tickValues는 축 위의 점의 개수와 위치를 지정 (y축 없앨때)
                        tickValues={[1,2,3,4,5,6,7,8]}
                        tickFormat={["01","02","03","04","05","06","07","08"]}
                        />
                        <VictoryAxis
                        //tickFormat은 점이 어떻게 보여질지를 지정  (x축 없앨때)
                        dependentAxis
                        tickFormat={(x) => `${x / 400}`}
                        />
                        <VictoryStack 
                        // VictoryStack 컴포넌트 아래에 VictoryBar 컴포넌트 import 후, data 속성에 데이터를 넘김
                            colorScale={["orange","tomato","blue" ]}
                                                >
                            <VictoryBar data={data1} x="quarter" y="earnings"  />
                            <VictoryBar data={data2} x="quarter" y="earnings"  />
                            <VictoryBar data={data3} x="quarter" y="earnings"  />

                        </VictoryStack>

                    </VictoryChart>
                    
                </div>

                <div className="graph-cover-horizontal">
                    <h2>Victory Test Graph - horizontal 그래프</h2>
                    
                    {/* <VictoryChart
                        // theme={VictoryTheme.material}
                        domainPadding={{ x: 10 }}
                    > */}
                        {/* <VictoryAxis /> */}
                        
                        <VictoryBar horizontal
                                    domainPadding={{ x: 10 }}
                                    style={{ data: {fill: "#92D050"} }}
                                    data={data2} 
                                    x="quarter" 
                                    y="earnings"
                        />
                        <VictoryBar horizontal data={data4}/>
                        <table>
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>메뉴</td>
                                    <td>그래프</td>
                                    <td>방문수</td>
                                    <td>백분율%</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td className="graph" data={data1}></td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td className="graph">3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td className="graph">3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td className="graph">3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                    {/* </VictoryChart> */}
                </div>
            </div>
        </>
    )
}
export default Graph;