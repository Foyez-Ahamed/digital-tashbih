const plusButton = document.getElementById('btn-plus');
const minusButton = document.getElementById('btn-minus');
const showCount = document.getElementById('show-count');

let initialCount = 0;
plusButton.addEventListener('click', function(){
  initialCount += 1;
  showCount.innerText = initialCount;
});

minusButton.addEventListener('click', function(){
  if(initialCount === 0){
    return alert('Negative value is not allow. Please provide positive value');
  }
  initialCount -= 1;
  showCount.innerText = initialCount;
});