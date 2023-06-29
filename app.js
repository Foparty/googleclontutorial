const rightNav = document.querySelector('.right-nav');
const leftHeader = document.querySelector('.left-side');

const device = navigator.userAgent;

if (device.includes('iPhone' || 'iPad')) {
	rightNav.style.display = 'none';
	leftHeader.style.display = 'block';
}
