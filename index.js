function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(resp){
      return resp.jason()
    })
    .then(function(json){
      console.log(json)
    })
  }
  
function renderBooks(json){
  
}