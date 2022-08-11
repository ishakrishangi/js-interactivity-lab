console.log('hello world')

document.querySelector("form").addEventListener("submit", addMovie )
const message = document.querySelector('#message')

function addMovie(event){
   event.preventDefault();
   let inputField = document.querySelector('input');

   let movie = document.createElement('li');
   let movieTitle = document.createElement("span");
   movieTitle.addEventListener('click', crossOffMovie)
   movieTitle.textContent = inputField.value;
   movie.appendChild(movieTitle)

   let deleteBtn = document.createElement("button")
   deleteBtn.textContent = 'X'
   deleteBtn.addEventListener('click', deleteMovie)
   movie.appendChild(deleteBtn)

   const list = document.querySelector("ul")
   list.appendChild(movie)

   inputField.value = ""

   // document.querySelector("ul").appendChild(movie)
}

function deleteMovie(event){
   event.target.parentNode.remove()
   message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
   revealMessage()
}

function crossOffMovie(event){
   event.target.classList.toggle('checked')
   if(event.target.classList.contains('checked')){
      // message.textContent = 'Movie watched!'
      message.textContent = `${event.target.textContent} watched!`


   }else{
      // message.textContent = 'Movie added back!'
      message.textContent = `${event.target.textContent} added back`
   }
}

function revealMessage(){
   message.classList.remove('hide')
   setTimeout(()=> message.classList.add('hide'), 1000 )
}

  