import { words } from './data.js';

let wordIndex = 0;
let wordObj = words[wordIndex]

const goToNextWord = () => {
	if (wordIndex === words.length-1) {
		return wordIndex = 0;
	}
	return wordIndex += 1;
}



export function load() {
	return {
		wordObj
	};
}
