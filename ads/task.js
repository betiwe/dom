const rotator = Array.from(document.querySelectorAll('.rotator'));

rotator.forEach((item) => {
  let rotatorCase = item.querySelectorAll('.rotator__case');
  let counter = 0;

  function addActive() {
    rotatorCase[counter].classList.remove('rotator__case_active');
    counter++;
    if (counter === rotatorCase.length) {
		counter = 0;
	}
    rotatorCase[counter].classList.add('rotator__case_active');
    setTimeout(addActive, 1000);
  }
  
  setTimeout(addActive, 1000);
});
