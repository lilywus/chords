google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawPM);

function drawPM() {
    var data = google.visualization.arrayToDataTable([
        ['Chord Progression', 'Occurences'],
        ['vi V ii vi', 3],
        ['ii V ii vi', 3],
        ['I ii vi ii', 3],
        ['I V ii I', 3],
        ['I I V I', 3],
        ['V I V I', 3],
        ['vi I V vi', 3],
        ['vi ii I ii', 3],
        ['ii I ii vi', 3],
        ['iii V I I', 3],
        ['IV I V ii', 3],
        ['I V I V', 3],
        ['I IV I vi', 3],
        ['ii IV ii I', 3],
        ['I V IV I', 3],
        ['ii ii V ii', 3],
        ['ii I ii IV', 2],
        ['ii vi V IV', 2],
        ['I iii I I', 2],
        ['I I iii V', 2],
        ['V ii I V', 2],
        ['IV vi ii ii', 2],
        ['vi ii ii V', 2],
        ['V iii V I', 2],
        ['IV I V IV', 2],
        ['I iii V iii', 2],
        ['V ii vi ii', 2],
        ['I V iii I', 2],
        ['vi I vi I', 2],
        ['IV I vi I', 2],
        ['iii vi ii V', 2],
        ['vi I vi IV', 2],
        ['V IV I IV', 2],
        ['iii I I V', 2],
        ['V I I iii', 2],
        ['V iii vi ii', 2],
        ['I I ii I', 2],
        ['V IV vi V', 2],
        ['I ii IV ii', 2],
        ['vi ii I V', 2],
        ['vi V IV vi', 2],
        ['vi ii V iii', 1],
        ['I I I V', 1],
        ['I IV vi iii', 1],
        ['iii V iii V', 1],
        ['vi I V I', 1],
        ['IV vi IV vi', 1],
        ['iii V iii I', 1],
        ['V IV I V', 1],
        ['iii I V iii', 1],
        ['vi ii V ii', 1],
        ['I IV I I', 1],
        ['V I V iii', 1],
        ['IV I iii iii', 1],
        ['V ii I ii', 1],
        ['IV vi ii IV', 1],
        ['ii vi ii V', 1],
        ['I vi I V', 1],
        ['vi IV vi IV', 1],
        ['V ii ii V', 1],
        ['ii vi ii vi', 1],
        ['vi iii IV vi', 1],
        ['IV vi iii IV', 1],
        ['IV I I ii', 1],
        ['iii vi V I', 1],
        ['I iii iii I', 1],
        ['ii I I ii', 1],
        ['I iii iii vi', 1],
        ['V I IV I', 1],
        ['I I iii iii', 1],
        ['iii iii I V', 1],
        ['ii V vi IV', 1],
        ['V iii I V', 1],
        ['I V iii V', 1],
        ['ii V ii ii', 1],
        ['V I I V', 1],
        ['V iii I iii', 1],
        ['iii V I V', 1],
        ['I I V iii', 1],
        ['vi V I IV', 1],
        ['ii IV vi ii', 1],
        ['V vi I V', 1],
        ['vi ii V vi', 1],
        ['iii I I I', 1],
        ['IV vi V ii', 1],
        ['IV IV vi IV', 1],
        ['IV I V iii', 1],
        ['IV vi V IV', 1],
        ['iii IV vi ii', 1],
        ['iii iii vi V', 1],
        ['I V vi I', 1],
        ['I ii I I', 1],
        ['ii vi V ii', 1],
        ['I V iii vi', 1],
        ['vi ii IV vi', 1],
        ['V iii I vi', 1],
        ['iii I I iii', 1],
        ['ii V iii vi', 1]
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Major 4-Chord Progressions in Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'none'},
      colors: ['ffb3b3']
    };

    var chart = new google.charts.Bar(document.getElementById('popMajor'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawPMi);

function drawPMi() {
    var data = google.visualization.arrayToDataTable([
        ['Chord Progression', 'Occurences'],
        ['III iv III i', 3],
        ['III i i v', 3],
        ['i III v III', 3],
        ['i VI i III', 3],
        ['i i i VII', 3],
        ['i i VII i', 3],
        ['VII v III i', 3],
        ['v III VII v', 3],
        ['v III i v', 3],
        ['III VI VII VI', 3],
        ['III i VI i', 3],
        ['III i VII i', 3],
        ['VII i v i', 2],
        ['v i v III', 2],
        ['i III v VII', 2],
        ['VII v III VII', 2],
        ['i iv III VI', 2],
        ['iv III i VI', 2],
        ['VII i iv III', 2],
        ['VI i iv i', 2],
        ['III v i v', 2],
        ['i i v III', 2],
        ['iv VI VII VI', 2],
        ['i VII i i', 2],
        ['III v III v', 2],
        ['v III i VII', 2],
        ['VII i VI i', 2],
        ['i VI i iv ', 2],
        ['iv III VI VII', 2],
        ['III i III v', 2],
        ['i iv i VI', 2],
        ['i III i v', 2],
        ['VII i i i', 2],
        ['i III i VII', 2],
        ['v VII i III', 2],
        ['i III iv III', 1],
        ['v VII i v', 1],
        ['v i VII i', 1],
        ['v VII i VII', 1],
        ['VII i III i', 1],
        ['i i VI i', 1],
        ['iv III i i', 1],
        ['i VII i III', 1],
        ['i v i VII', 1],
        ['VI III i iv', 1],
        ['i VII v III', 1],
        ['i i i i', 1],
        ['i III iv VI', 1],
        ['iv i i iv', 1],
        ['iv VI i iv', 1],
        ['i III i VI', 1],
        ['VII i III iv', 1],
        ['VI i III VI', 1],
        ['III VI i III', 1],
        ['v III VII VII', 1],
        ['i iv i i', 1],
        ['v III v VII', 1],
        ['III v v i', 1],
        ['III i i i', 1],
        ['VI i III III', 1],
        ['VI i VII III', 1],
        ['v v i III', 1],
        ['i VII III iv', 1],
        ['iv i VI i', 1],
        ['i i iv i', 1],
        ['III VII VII i', 1],
        ['III i i VI', 1],
        ['i i v i', 1],
        ['i iv VI i', 1],
        ['i VI i VII', 1],
        ['VII i III VII', 1],
        ['i III VI III', 1],
        ['i III v v', 1],
        ['III VII i III', 1],
        ['i III VI i', 1],
        ['VI VII i VII', 1],
        ['VII III iv II',I1],
        ['III i iv VI', 1],
        ['VII VII i III', 1],
        ['VI i III iv', 1],
        ['III iv VI VII', 1],
        ['VI i III i', 1],
        ['i III VII v', 1],
        ['i i i III', 1],
        ['i v i III', 1],
        ['v III v i', 1],
        ['III III iv III', 1],
        ['III i VII v', 1],
        ['i III III iv', 1],
        ['III VI III i', 1],
        ['VII i VII VI', 1],
        ['III v III VII', 1],
        ['VI i iv VI', 1],
        ['i VII VI VII', 1]
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Minor 4-Chord Progressions in Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'none'},
      colors: ['ffb3b3']
    };

    var chart = new google.charts.Bar(document.getElementById('popMinor'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawKM);

function drawKM() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Occurences'],
      ['I V iii I', 66],
      ['V iii I V', 60],
      ['iii I V iii', 57],
      ['IV I V vi', 38],
      ['I V vi IV', 37],
      ['V vi IV I', 37],
      ['vi IV I V', 35],
      ['I V I V', 30],
      ['IV I ii I', 26],
      ['I IV I ii', 26],
      ['V I V I', 23],
      ['I IV I IV', 22],
      ['ii I vi ii', 21],
      ['I vi ii I', 21],
      ['IV I IV I', 21],
      ['ii I IV I', 19],
      ['I IV ii I', 19],
      ['I ii I IV', 19],
      ['IV V I vi', 18],
      ['V I vi IV', 17],
      ['I vi I IV', 15],
      ['I vi IV V', 14],
      ['I I IV I', 14],
      ['ii I IV ii', 14],
      ['vi ii I vi', 13],
      ['V I V iii', 12],
      ['I vi IV I', 12],
      ['vi IV V I', 12],
      ['I ii IV I', 12],
      ['I iii IV I', 11],
      ['I ii I I', 11],
      ['IV I vi IV', 10],
      ['IV ii I IV', 10],
      ['ii I ii I', 10],
      ['IV I ii IV', 10],
      ['ii I I IV', 9],
      ['I ii I vi', 9],
      ['ii IV I vi', 9],
      ['iii I V I', 9],
      ['vi I IV I', 9]
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Major 4-Chord Progressions in K-Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'none'},
      colors: ['4688f1']
    };

    var chart = new google.charts.Bar(document.getElementById('kpopMajor'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawKMi);

function drawKMi() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Occurences'],
      ['VI i VI i', 27],
      ['i VI i VI', 27],
      ['i i i i', 15],
      ['i v iv v', 7],
      ['i v VI VII', 7],
      ['v iv v i', 7],
      ['VI VII i VI', 6],
      ['i VI i v', 6],
      ['v VI VII i', 6],
      ['i III iv i', 5],
      ['iv v i v', 4],
      ['VI v i VI', 4],
      ['i VI VII i', 4],
      ['III iv i III', 4],
      ['v i v iv', 4],
      ['VI i v i', 4]
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Minor 4-Chord Progressions in K-Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'none'},
      colors: ['4688f1']
    };

    var chart = new google.charts.Bar(document.getElementById('kpopMinor'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}