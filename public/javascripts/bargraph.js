/**
 * Created by elanastroud on 2/12/16.
 */

console.log("test");

var data = [
    { label: 'Layer 1', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2} ] },
    { label: 'Layer 2', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 4} ] }
];
// //
// //var areaChartInstance = $('#area').epoch({
// //    type: 'area',
// //    data: data,
// //    axes: ['left', 'right', 'bottom']
// //});

var barChartData = [
    // First bar series
    {
        label: 'Series 1',
        values: [
            { x: 'A', y: 30 },
            { x: 'B', y: 10 },
                { x: 'C', y: 12 }]
    },

    // Second series
    {
        label: 'Series 2',
            values: [
        { x: 'A', y: 20 },
        { x: 'B', y: 39 },
        { x: 'C', y: 8 }]
}];

$('#barChart').epoch({
    type: 'bar',
    data: barChartData
});