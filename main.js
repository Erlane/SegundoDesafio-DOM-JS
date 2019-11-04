
function handleChange(event) {
	var title = document.querySelector('h1');
	var caixa = document.querySelector('input').value;

	title.innerHTML = caixa;

	title.addEventListener ('mousemove', function(){
		title.style.color = 'purple'
	})

	title.addEventListener ('mouseenter', function(){
		title.style.color = 'pink'
	})
}
