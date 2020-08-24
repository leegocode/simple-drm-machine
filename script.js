const data = {
    'E': {sound: 'media/sounds/drum1.mp3'},
    'R': {sound: 'media/sounds/drum2.mp3'},
    'T': {sound: 'media/sounds/beat1.mp3'},
    'D': {sound: 'media/sounds/beat2.mp3'},
    'F': {sound: 'media/sounds/beat3.mp3'},
    'G': {sound: 'media/sounds/lindrum.mp3'},
    'C': {sound: 'media/sounds/percu1.mp3'},
    'V': {sound: 'media/sounds/electro1.mp3'},
    'B': {sound: 'media/sounds/electro2.mp3'},
  };
  
  
  function construct(){
    for(const letter in data){
      const keyDiv = document.createElement('div');
      keyDiv.classList.add('drum');
      let h2 = document.createElement('h2')
      h2.textContent = letter;
      keyDiv.appendChild(h2);
      document.getElementById('musicBox').appendChild(keyDiv);

      keyDiv.addEventListener('click', function(event){
        let letter = event.currentTarget.querySelector('h2').textContent;
        event.currentTarget.classList.add('purple');
        playDrum(letter); 
     })

      keyDiv.addEventListener('mouseover', function(event){
        event.currentTarget.classList.add('blue');
      })

      keyDiv.addEventListener('mouseleave', function(event){
        event.currentTarget.classList.remove('blue');
        event.currentTarget.classList.remove('purple');
      })
  
    }
  }
  
  
  function playDrum(letter){
    const audio = new Audio();
    audio.src = data[letter].sound;
    audio.play();
  }
  
  construct();

  window.addEventListener('keydown', hadlekeyeyevents);

  function hadlekeyeyevents(event){
      playDrum(event.key.toUpperCase())
  }