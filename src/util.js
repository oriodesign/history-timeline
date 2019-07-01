import { START } from './constants';

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export function getCenturies() {
	const years = [];
	for (let i = -START; i <= 2000; i = i + 100) {
	  years.push(i);
	}

	return years;
}
