

// var chartDom = document.getElementById('chart1');
// var myChart = echarts.init(chartDom);
// var option;


// const dimensions = [
//     'name', 'Price', 'Prime cost', 'Prime cost min', 'Prime cost max', 'Price min', 'Price max'
// ];
// // prettier-ignore
// const data = [

//     ['Trousers "Lavender Fields"', 443.36, 3, 370, 413.24, 412.36, 484.36],
//     ['Jumper "Coffee with Milk"', 543.36, 307.24, 288.24, 317.24, 509.36, 574.36],
//     ['Blouse "Blooming Cactus"', 790.36, 277.24, 254.24, 295.24, 764.36, 818.36],
//     ['Sweater "Fluffy Comfort"', 790.34, 678.34, 660.34, 690.34, 762.34, 824.34]
// ];
// function renderItem(params, api) {
//   const group = {
//     type: 'group',
//     children: []
//   };
//   let coordDims = ['x', 'y'];
//   for (let baseDimIdx = 0; baseDimIdx < 2; baseDimIdx++) {
//     let otherDimIdx = 1 - baseDimIdx;
//     let encode = params.encode;
//     let baseValue = api.value(encode[coordDims[baseDimIdx]][0]);
//     let param = [];
//     param[baseDimIdx] = baseValue;
//     param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][1]);
//     let highPoint = api.coord(param);
//     param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][2]);
//     let lowPoint = api.coord(param);
//     let halfWidth = 3;
//     var style = api.style({
//       stroke: api.visual('color'),
//       fill: undefined
//     });
//     group.children.push(
//       {
//         type: 'line',
//         transition: ['shape'],
//         shape: makeShape(
//           baseDimIdx,
//           highPoint[baseDimIdx] - halfWidth,
//           highPoint[otherDimIdx],
//           highPoint[baseDimIdx] + halfWidth,
//           highPoint[otherDimIdx]
//         ),
//         style: style
//       },
//       {
//         type: 'line',
//         transition: ['shape'],
//         shape: makeShape(
//           baseDimIdx,
//           highPoint[baseDimIdx],
//           highPoint[otherDimIdx],
//           lowPoint[baseDimIdx],
//           lowPoint[otherDimIdx]
//         ),
//         style: style
//       },
//       {
//         type: 'line',
//         transition: ['shape'],
//         shape: makeShape(
//           baseDimIdx,
//           lowPoint[baseDimIdx] - halfWidth,
//           lowPoint[otherDimIdx],
//           lowPoint[baseDimIdx] + halfWidth,
//           lowPoint[otherDimIdx]
//         ),
//         style: style
//       }
//     );
//   }
//   function makeShape(baseDimIdx, base1, value1, base2, value2) {
//     var shape = {};
//     shape[coordDims[baseDimIdx] + '1'] = base1;
//     shape[coordDims[1 - baseDimIdx] + '1'] = value1;
//     shape[coordDims[baseDimIdx] + '2'] = base2;
//     shape[coordDims[1 - baseDimIdx] + '2'] = value2;
//     return shape;
//   }
//   return group;
// }
// option = {
//   tooltip: {},
//   legend: {
//     data: ['bar', 'error']
//   },
//   dataZoom: [
//     {
//       type: 'slider'
//     },
//     {
//       type: 'inside'
//     }
//   ],
//   grid: {
//     bottom: 80
//   },
//   xAxis: {},
//   yAxis: {},
//   series: [
//     {
//       type: 'scatter',
//       name: 'error',
//       data: data,
//       dimensions: dimensions,
//       encode: {
//         x: 2,
//         y: 1,
//         tooltip: [2, 1, 3, 4, 5, 6],
//         itemName: 0
//       },
//       itemStyle: {
//         color: '#77bef7'
//       }
//     },
//     {
//       type: 'custom',
//       name: 'error',
//       renderItem: renderItem,
//       dimensions: dimensions,
//       encode: {
//         x: [2, 3, 4],
//         y: [1, 5, 6],
//         tooltip: [2, 1, 3, 4, 5, 6],
//         itemName: 0
//       },
//       data: data,
//       z: 100
//     }
//   ]
// };

// option && myChart.setOption(option);
