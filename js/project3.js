// all id catch //
const mainContainer = document.getElementById('main-container');
const textArea = document.getElementById('text-area');
const submitBtn = document.getElementById('submit-btn');

// operation start // 
submitBtn.addEventListener('click', function(){
   const getTextAreaValue = textArea.value;
   const createh1 = document.createElement('h1');
   createh1.innerText = getTextAreaValue;


   mainContainer.appendChild(createh1);
   textArea.value = "";
});


textArea.addEventListener('keyup', function(event){
  if(event.key === "Enter"){
    const getTextAreaValue = textArea.value;
   const createh1 = document.createElement('h1');
   createh1.innerText = getTextAreaValue;


   mainContainer.appendChild(createh1);
   textArea.value = "";
  }
});

// done Alhamdulillah // 