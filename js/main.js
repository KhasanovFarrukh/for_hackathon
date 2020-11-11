let nav = document.getElementById('sitenav');
let btndrop = document.getElementById('dropdown');
let annually = document.getElementById('annually');
let monthly = document.getElementById('monthly');
let card = document.getElementById('card');
let will = document.getElementById('will');


btndrop.addEventListener('click', function() {
	if (nav.style.display == 'block') {
		nav.style.display = 'none'
	} else {
		nav.style.display = 'block'
	}
})

annually.addEventListener('click', function() {
	card.style.display = 'none';
	will.style.display = 'block';
	monthly.classList.remove('active');
	annually.classList.add('active');
})

monthly.addEventListener('click', function() {
	card.style.display = 'block';
	will.style.display = 'none';
	annually.classList.remove('active');
	monthly.classList.add('active');
})

window.addEventListener('resize', function() {
	if (window.innerWidth > 992) {
		nav.style.display = 'block'
	} else {
		nav.style.display = 'none'
	}
})
