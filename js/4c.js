var kmajor = [
            'I V iii I',
            'V iii I V',
            'iii I V iii',
            'IV I V vi',
            'I V vi IV'
        
];

var kmajord = {
  label: 'K-Pop 4 Chord Progression Frequencies',
  data: [
        66,
        60,
        57,
        38,
        37
  ]
};

var kmajort = 'Frequency of 4 Chord Progressions';

function fourChords(labels, data, title) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [labels],
        datasets: [data],  
        borderWidth: 1,
        backgroundColor: '#b3b3ff',
        borderColor: '#6666ff'
      },
      options: {
          title: {
              display: true,
              text: title;
          },
          tooltips: {
             custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
             },
             callbacks: {
                label: function(tooltipItem, data) {
                   var label = data.labels[tooltipItem.index];
                   return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                }
             }
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Chart Ranking'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Frequency of Common Cords'
              }
            }]
          }
       }
    });
}