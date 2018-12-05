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
        subtitle: 'Chord Progressions That Appear ≤ 3 Times (Total: 97)',
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
        ['VII III iv III', 1],
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
        subtitle: 'Chord Progressions That Appear ≤ 3 Times (Total: 93)',
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
        ['I vi I ii', 3],
        ['vi V I iii', 3],
        ['iii ii I iii', 3],
        ['IV iii ii V', 3],
        ['IV I I IV', 3],
        ['vi IV I iii', 3],
        ['I V I iii', 3],
        ['ii I vi V', 3],
        ['V I IV I', 3],
        ['ii IV IV ii', 3],
        ['IV IV V I', 3],
        ['IV V IV V', 3],
        ['IV IV ii IV', 3],
        ['IV V I iii', 3],
        ['I I ii I', 3],
        ['I vi V I', 3],
        ['IV vi I IV', 3],
        ['V I IV ii', 3],
        ['iii V iii I', 3],
        ['vi I IV iii', 3],
        ['I vi IV ii', 3],
        ['vi IV I IV', 3],
        ['IV I V IV', 3],
        ['iii I iii ii', 3],
        ['V iii I I', 3],
        ['I V iii V', 3],
        ['vi V I IV', 3],
        ['I V IV V', 3],
        ['I V I I', 3],
        ['I iii ii I', 3],
        ['I IV ii IV', 3],
        ['ii I ii IV', 2],
        ['vi V IV ii', 2],
        ['IV I I I', 2],
        ['V IV I V', 2],
        ['V I IV V', 2],
        ['I I V I', 2],
        ['V I vi V', 2],
        ['I IV vi I', 2],
        ['IV IV I I', 2],
        ['ii I I ii', 2],
        ['I IV ii vi', 2],
        ['V I V V', 2],
        ['I iii vi IV', 2],
        ['iii I iii V', 2],
        ['V IV vi ii', 2],
        ['vi IV IV V', 2],
        ['iii V I V', 2],
        ['V iii ii vi', 2],
        ['iii IV I iii', 2],
        ['I ii V I', 2],
        ['vi IV vi V', 2],
        ['vi ii V I', 2],
        ['V IV I IV', 2],
        ['IV I V I', 2],
        ['ii IV I ii', 2],
        ['IV V I IV', 2],
        ['iii I I V', 2],
        ['IV I iii I', 2],
        ['IV I IV IV', 2],
        ['ii I iii I', 2],
        ['iii V iii V', 2],
        ['IV vi IV vi', 2],
        ['ii I V IV', 2],
        ['IV V I V', 2],
        ['V iii V I', 2],
        ['vi ii I IV', 2],
        ['IV ii I V', 2],
        ['vi IV ii I', 2],
        ['V V I V', 2],
        ['V I I I', 2],
        ['I ii I ii', 2],
        ['ii vi I vi', 2],
        ['V I IV vi', 2],
        ['vi V I ii', 2],
        ['V I iii ii', 2],
        ['iii IV vi V', 2],
        ['I I I IV', 2],
        ['IV vi ii V', 2],
        ['V IV ii I', 2],
        ['V IV V IV', 2],
        ['ii vi IV V', 2],
        ['I ii IV ii', 2],
        ['vi I IV vi', 2],
        ['vi ii I V', 2],
        ['vi V IV vi', 2],
        ['ii vi ii I', 1],
        ['IV vi IV iii', 1],
        ['V I I IV', 1],
        ['I I ii V', 1],
        ['IV iii ii I', 1],
        ['V I ii vi', 1],
        ['I ii I iii', 1],
        ['ii I ii ii', 1],
        ['I I V IV', 1],
        ['V iii V IV', 1],
        ['ii ii vi ii', 1],
        ['vi V I I', 1],
        ['IV IV IV IV', 1],
        ['IV I vi ii', 1],
        ['ii IV I I', 1],
        ['iii ii I IV', 1],
        ['I ii vi ii', 1],
        ['ii ii I vi', 1],
        ['I vi ii IV', 1],
        ['ii I iii vi', 1],
        ['ii vi ii vi', 1],
        ['I ii ii I', 1],
        ['iii I I ii', 1],
        ['V ii iii ii', 1],
        ['vi V I V', 1],
        ['iii I vi IV', 1],
        ['I IV vi V', 1],
        ['V iii ii V', 1],
        ['ii vi V I', 1],
        ['I iii V iii', 1],
        ['IV ii vi I', 1],
        ['V I IV iii', 1],
        ['I IV V IV', 1],
        ['I iii I IV', 1],
        ['V I I vi', 1],
        ['ii IV IV I', 1],
        ['IV ii ii vi', 1],
        ['iii vi I IV', 1],
        ['iii I IV I', 1],
        ['I IV IV IV', 1],
        ['ii I I V', 1],
        ['I V V I', 1],
        ['ii IV IV V', 1],
        ['iii V IV V', 1],
        ['I iii I ii', 1],
        ['ii I I I', 1],
        ['ii IV V iii', 1],
        ['IV ii IV V', 1],
        ['IV ii V I', 1],
        ['I V V V', 1],
        ['I V IV vi', 1],
        ['V vi ii I', 1],
        ['IV iii I vi', 1],
        ['V IV I iii', 1],
        ['I V vi ii', 1],
        ['iii IV I I', 1],
        ['ii I I vi', 1],
        ['iii vi IV V', 1],
        ['vi IV I vi', 1],
        ['I IV iii I', 1],
        ['I I vi IV', 1],
        ['iii vi IV I', 1],
        ['iii ii vi IV', 1],
        ['I iii IV vi', 1],
        ['vi I iii ii', 1],
        ['I iii vi I', 1],
        ['vi I ii V', 1],
        ['iii ii vi V', 1],
        ['V IV vi V', 1],
        ['vi vi V I', 1],
        ['vi I ii I', 1],
        ['ii V iii vi', 1],
        ['V iii vi V', 1],
        ['IV V iii V', 1],
        ['I V I IV', 1],
        ['vi ii vi I', 1],
        ['I I I I', 1],
        ['IV IV IV V', 1],
        ['I IV I I', 1],
        ['V ii I ii', 1],
        ['I vi IV IV', 1],
        ['ii vi I IV', 1],
        ['V I ii I', 1],
        ['vi ii IV I', 1],
        ['ii I iii V', 1],
        ['IV vi ii ii', 1],
        ['IV IV V iii', 1],
        ['IV V I I', 1],
        ['I iii V vi', 1],
        ['iii vi V I', 1],
        ['V iii ii ii', 1],
        ['V I V IV', 1],
        ['iii V vi I', 1],
        ['I vi I iii', 1],
        ['V V V I', 1],
        ['IV I ii V', 1],
        ['iii IV I vi', 1],
        ['IV IV IV I', 1],
        ['ii V I I', 1],
        ['ii I IV iii', 1],
        ['V I vi ii', 1],
        ['vi I ii IV', 1],
        ['IV V IV I', 1],
        ['V I iii vi', 1],
        ['IV ii I I', 1],
        ['V V ii iii', 1],
        ['vi IV iii IV', 1],
        ['ii I V vi', 1],
        ['I I I iii', 1],
        ['IV V iii vi', 1],
        ['I V I vi', 1],
        ['IV I IV V', 1],
        ['vi ii I I', 1],
        ['IV I vi V', 1],
        ['vi IV ii V', 1],
        ['I I IV ii', 1],
        ['vi I vi V', 1],
        ['iii V V ii', 1],
        ['iii I V V', 1],
        ['IV vi IV IV', 1],
        ['V I I V', 1],
        ['I IV IV I', 1],
        ['I I iii ii', 1],
        ['IV I iii vi', 1],
        ['I I V iii', 1],
        ['I IV vi ii', 1],
        ['ii iii ii V', 1],
        ['iii I ii I', 1],
        ['vi I vi IV', 1],
        ['V vi I IV', 1],
        ['ii V iii V', 1],
        ['vi IV V IV', 1],
        ['I I vi I', 1],
        ['I iii V V', 1],
        ['ii ii V I', 1],
        ['IV ii vi IV', 1],
        ['iii ii ii V', 1],
        ['vi V I vi', 1],
        ['I ii V iii', 1],
        ['IV vi V IV', 1],
        ['ii IV ii IV', 1],
        ['iii IV I ii', 1],
        ['IV IV I IV', 1],
        ['V I I iii', 1],
        ['ii IV ii I', 1],
        ['IV iii IV vi', 1],
        ['vi ii ii vi', 1],
        ['I I I ii', 1],
        ['ii ii vi I', 1],
        ['vi V IV I', 1],
        ['I IV ii ii', 1],
        ['iii ii V iii', 1],
        ['V iii vi IV', 1]
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Major 4-Chord Progressions in K-Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times (Total: 238)',
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
        ['VII i v VI', 3],
        ['v i VI iv', 3],
        ['iv i v VI', 3],
        ['i VI v i', 3],
        ['VI i v VI', 3],
        ['VI i VI VII', 3],
        ['VI iv i v', 3],
        ['VII i VI i', 3],
        ['i v i VI', 3],
        ['VI VII i v', 3],
        ['iv i III iv', 3],
        ['i v i v', 3],
        ['v i VI i', 3],
        ['i VI iv i', 3],
        ['iv i v iv', 2],
        ['i III VI i', 2],
        ['i i i v', 2],
        ['v i v i', 2],
        ['i i v iv', 2],
        ['VII i VI v', 2],
        ['VII i VI VII', 2],
        ['i v VI i', 2],
        ['iv iv i v', 1],
        ['i VII iv i', 1],
        ['VI VII i i', 1],
        ['i III i III', 1],
        ['v i i v', 1],
        ['III VI i VI', 1],
        ['i VII i III', 1],
        ['v VI i v', 1],
        ['VII i i III', 1],
        ['v i VI v', 1],
        ['i v VI v', 1],
        ['VII iv i VII', 1],
        ['VII VI i VI', 1],
        ['iv v i i', 1],
        ['i v III iv', 1],
        ['VI VII i VII', 1],
        ['VII i III iv', 1],
        ['III VI i III', 1],
        ['v i iv i', 1],
        ['VI i III iv', 1],
        ['iv i III i', 1],
        ['i v i i', 1],
        ['VI i III i', 1],
        ['III iv i v', 1],
        ['v VI v i', 1],
        ['iv i VI i', 1],
        ['i III i VII', 1],
        ['v VI i VI', 1],
        ['iv i VII i', 1],
        ['v i v VI', 1],
        ['III i VII i', 1],
        ['III iv i VI', 1],
        ['i VI VII VI', 1],
        ['VI VII VI i', 1],
        ['i i III VI', 1],
        ['i i v i', 1],
        ['i v iv iv', 1],
        ['v iv iv i', 1],
        ['iv v i iv', 1],
        ['VII i VII iv', 1],
        ['i VII i VI', 1],
        ['i VI i III', 1],
        ['iv i v III', 1],
        ['v III iv i', 1],
        ['i iv i v', 1],
    ]);

    var options = {
      chart: {
        title: 'Occurences of Rare Minor 4-Chord Progressions in K-Pop Songs',
        subtitle: 'Chord Progressions That Appear ≤ 3 Times (Total: 66)',
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