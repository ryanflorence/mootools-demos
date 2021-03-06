var log = $('log');

var fx = new Fx.Morph('box', {
	duration: 1000,
	transition: Fx.Transitions.Quart.easeOut
});
 
$('start').addEvent('click', function(){
	log.set('html', 'starting...');
	fx.start({
		'width': 300,
		'height': 210
	}).chain(function(){
		// executes immediately after completion of above effect
		log.set('html', 'First effect completed (1/5)');
		this.start({
			'opacity': .3
		});
	}).chain(function() {
		// executes 5 seconds after completion of above effect
		log.set('html', 'Second effect completed (2/5).<br />Waiting 5 seconds before starting third.');
		this.start.delay(5000, this, {
			'opacity': 1
		});
	}).chain(function() {
		// executes 2 seconds after completion of above effect
		log.set('html', 'Third effect completed (3/5).<br />Waiting 2 seconds before starting fourth.');
		this.start.delay(2000, this, {
			'background-color': '#89c577'
		});
	}).chain(function() {
		// executes 1 seconds after completion of above effect
		log.set('html', 'Fourth effect completed (4/5).<br />Waiting 1 second before starting fifth.');
		this.start.delay(1000, this, {
			'background-color': '#4f8096',
			'width': 100,
			'height': 70
		});
	}).chain(function() {
		// executes immediately after completion of above effect
		log.set('html', 'Fifth effect completed (5/5).');
	});
});