(function() {
  'use strict';

  const buttons = document.querySelectorAll('.button')
  const stopButton = document.querySelector('#stopButton')
  const slowButton = document.querySelector('#slowButton')
  const goButton = document.querySelector('#goButton')

  const bulbs = document.querySelectorAll('.bulb')
  const stopLight = document.querySelector('#stopLight')
  const slowLight = document.querySelector('#slowLight')
  const goLight = document.querySelector('#goLight')

  buttons.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      toggleLight(e.target.id)
    })
  })
  buttons.forEach(function(elem){
    elem.addEventListener('mouseenter', function(e){
      console.log('Entered ' + elem.textContent + ' button')
    })
  })

  
  
  buttons.forEach(function(elem){
    elem.addEventListener('click', function(e){
      if(stopLight.classList.contains('stop') || slowLight.classList.contains('slow') || goLight.classList.contains('go')){
        console.log(`${elem.textContent} bulb on`)
      } else {
        console.log(`${elem.textContent} bulb off`)
      }
    })
  })



function toggleLight(idString) {


  if (idString === 'stopButton') {
    if (stopLight.classList.contains('stop') ){
      stopLight.classList.remove('stop')
    } else {
      stopLight.classList.add('stop')
    }
  }
  if (idString === 'slowButton') {
    if (slowLight.classList.contains('slow')) {
      slowLight.classList.remove('slow')
    } else {
      slowLight.classList.add('slow')
    }
  }
  if (idString === 'goButton') {
    if (goLight.classList.contains('go')) {
      goLight.classList.remove('go')
    } else {
      goLight.classList.add('go')
    }
  }
}

})();