const counters = document.querySelectorAll('.number1');
const speed = 1000;

counters.forEach(number1 => {
	const updateCount = () => {
		const target = +number1.getAttribute('data-target');
		const count = +number1.innerText;

		const inc = target / speed;

		console.log(count);

		if(count < target)
		{
			number1.innerText = count + inc;
			setTimeout(updateCount, 1);
		}
		else
		{
			count.innerText = target; 
		}
	}
	updateCount();
});