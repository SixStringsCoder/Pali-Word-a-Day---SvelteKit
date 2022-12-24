<script>
  import WordCard from './WordCard.svelte'
	export let data;

	const wordsData = data.words
	let wordIndex = 0;
	let word = wordsData[wordIndex].word
	let definition = wordsData[wordIndex].translations.eng.translation
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
