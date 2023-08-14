// Subhan Allah section dynamic //
const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementbtn = document.getElementById('subhanAllahIncrementbtn');
const subhanAlllahDecrementbtn = document.getElementById('subhanAlllahDecrementbtn');


let subhanAllahInitialValue = 0;
subhanAllahIncrementbtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert('Subhan Allah complete, please fulfil another one 🥰')
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAlllahDecrementbtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert('You cannot added negative value😑');
    };
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});
// Subhan Allah section dynamic //


// Alhamdulillah section dynamic //
const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrementbtn = document.getElementById('alhamdulillahIncrementbtn');
const alhamdulillahDecrementbtn = document.getElementById('alhamdulillahDecrementbtn');


let alhamdulillahInitialValue = 0;
alhamdulillahIncrementbtn.addEventListener('click', function(){
   if(alhamdulillahInitialValue === 33){
    return alert('Alhamdulillah complete, please fulfil another one 🥰')
   }
   alhamdulillahInitialValue += 1;
   alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

alhamdulillahDecrementbtn.addEventListener('click', function(){
  if(alhamdulillahInitialValue === 0){
    return alert('You cannot added negative value😑');
  }

  alhamdulillahInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
// Alhamdulillah section dynamic //



// Allahu Akber section dynamic // 
const allahuakberDisplay = document.getElementById('allahuakberDisplay');
const allahuakberIncrementbtn = document.getElementById('allahuakberIncrementbtn');
const allahuakberDecrementbtn = document.getElementById('allahuakberDecrementbtn');

let allahuakberInitialValue = 0;
allahuakberIncrementbtn.addEventListener('click', function(){
    if(allahuakberInitialValue === 33){
        return alert('Allahu Akber complete, Now say La ilaha illallahu wahdahu la sarikalahu lahul mulku walahul hamdu ohua ala kulli saiyeeen kadir🥰')
       }
  allahuakberInitialValue += 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
});

allahuakberDecrementbtn.addEventListener('click', function(){
    if(allahuakberInitialValue === 0){
        return alert('You cannot added negative value😑');
      }
    allahuakberInitialValue -= 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})
// Allahu Akber section dynamic // 


// reset button dynamic //
const resetButton = document.getElementById('btn-reset');
resetButton.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuakberDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakberInitialValue = 0;
});
// reset button dynamic //