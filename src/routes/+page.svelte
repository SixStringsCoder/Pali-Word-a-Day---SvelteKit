<script>
	import { words } from './data.js'
	// console.log(words)
  import WordCard from './WordCard.svelte'

	let wordIndex = 0;
	$: wordObj = words[wordIndex]
	$: word = wordObj.word
	$: definition = wordObj.translations.eng.translation

const goToNextWord = () => {
	if (wordIndex === words.length-1) {
		return wordIndex = 0;
	}
	return wordIndex += 1;
}

// 24 hours = 86400000 millisecs
setInterval(goToNextWord, 5000)



</script>

<svelte:head>
	<title>Pali Word a Day</title>
	<meta name="description" content="Pali Word a Day" />
</svelte:head>

<section>
	<WordCard {word} {definition} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}	
</style>
