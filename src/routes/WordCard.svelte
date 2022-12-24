<script>
export let word
export let definition
</script>


<h1>{word}</h1>
<p class="definition">{definition}</p>


<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:wght@400;700&display=swap');

* {
  font-family: 'Gentium Book Plus', serif;
}

h1 {
		font-weight: bold;
    margin: 0;
	}

	.definition {
		font-size: 1.5rem;
		text-align: center;
	}
</style>