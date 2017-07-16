var scribble = require('scribbletune');
let drum,perc,clip1;


clip1 = scribble.clip({
	notes: ['f#3','c#4','e4','d3','f#4','a4','a3','c#5','e5','d3','c#5','e5','a3','c#4','e4','f#3','c#4','e4','a3','c#4','e4'],
	pattern: 'x__-x_x_x__-x_x_x__-x_x_x__-x_x_x__-x_x_x__-x_x_'.repeat(100),
});


scribble.midi(clip1,'miomidi.mid');

drum=scribble.clip({
	notes:['e2'],
	pattern: 'x_______x_______'.repeat(1000),
	
});


scribble.midi(drum,'drum.mid');

cymbals=scribble.clip({
	notes:['e3'],
	pattern: '----x___'.repeat(1000),
	
});
scribble.midi(cymbals,'cymbals.mid');

