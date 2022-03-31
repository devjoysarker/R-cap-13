


const go     = document.getElementById('go');
const stop   = document.getElementById('stop');
const output = document.getElementById('output');

let love = '';
go.addEventListener('click', function(){
   
   output.innerHTML = `This is very easy but U can't focus is its very difficult`; 
   love = setInterval(() => {

        output.innerHTML=`We love javascript`;
    }, 3000);
    
});

stop.addEventListener('click', () => {

    clearInterval(love);
    output.innerHTML=`I love MERN`;

    setInterval(() => {

    output.innerText=`We also love payton`;
    },3000);

});

const buton1 = document.querySelector('#button-1');
const buton2 = document.querySelector('#button-2');
const buton3 = document.querySelector('#button-3');
const show   = document.querySelector('.show');

let counter_value = 0;
let counter;

buton1.addEventListener('click', function(){

    counter= setInterval ( () => {
        show.innerHTML = counter_value;

        counter_value++;
    },1000);


});

buton2.addEventListener('click', function(){

    clearInterval(counter);
});

buton3.addEventListener('click', function(){

  counter_value= 0;
  show.innerHTML = counter_value;
  clearInterval(counter);
  
});

const start = document.getElementById('start');
const sttop = document.getElementById('stop');
const count = document.getElementById('count');
const B_out = document.getElementById('B_out');
const load  = document.querySelector('.loader');

let couttter_vlue;
let counnter;

start.addEventListener('click', function(){

    couttter_vlue = count.value;

    counnter = setInterval(() => {
        B_out.innerHTML= couttter_vlue;
       
        let width = loader(count.value , couttter_vlue);

       load.style.width =`${width}%`;

       if (width > 50 && width <= 100) {
           load.style.backgroundColor ='green';
       } else if(width >30 && width <=50) {
           load.style.backgroundColor = 'Orange';
       }else if (width <=30){
           load.style.backgroundColor = 'red';
       }

       if (couttter_vlue == 0) {
           clearInterval(counnter);
       }

        couttter_vlue--;
    }, 1000);
});










