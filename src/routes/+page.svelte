<script>
  import WordCard from './WordCard.svelte'
</script>

<svelte:head>
	<title>Pali Word a Day</title>
	<meta name="description" content="Pali Word a Day" />
</svelte:head>

<section>
	<WordCard />
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
