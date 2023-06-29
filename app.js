const body = document.body;
const rightNav = document.querySelector('.right-nav');
const leftHeader = document.querySelector('.left-side');

if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	body.classList = 'dark';
} else {
	body.classList = 'light';
}
const device = navigator.userAgent;

if (device.includes('iPhone' || 'iPad')) {
	rightNav.style.display = 'none';
	leftHeader.style.display = 'block';
}
