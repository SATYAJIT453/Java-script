# projects related to DOM


## project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1 solution

```javascript


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id==='grey'){
    body.style.backgroundColor='grey'
    }
    if (e.target.id==='white'){
      body.style.backgroundColor='white'
      }
    if (e.target.id==='blue'){
        body.style.backgroundColor='blue'
        }
    if (e.target.id==='yellow'){
          body.style.backgroundColor='yellow'
          }
  });
});



```



## Project 2 solution

```javascript
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if (height ==='' || height < 0 || isNaN(height)){
    results.innerHTML='please give a valid number'
  }else if (weight ==='' || weight < 0 || isNaN(weight)){
    results.innerHTML='please give a valid weight'
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
  }
});

```


## project 3
```javascript
const clock = document.getElementById('clock');
// const clock=document.querySelector('#clock')

setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000)



```

## project 4
```javascript







```