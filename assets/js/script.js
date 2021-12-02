/* var formatEL = document.querySelector('')
var searchEL = document.querySelector('') */
var buttonEL = document.querySelector('#btn');
var choicesEL = document.querySelector('#choices')
var searchEL = document.querySelector('#search')
var searchTerm = ''
var selectedOption
var fetchURL







function submit() {
  searchTerm = searchTerm = searchEL.value.trim();
  selectedOption = choicesEL.value

  if (searchTerm && selectedOption) { 
    console.log('T T')
  fetchURL = 'https://www.loc.gov/' + selectedOption + '/?q=' + searchTerm + '&fo=json';
  }
  if (searchTerm && !selectedOption){
    console.log('T F')
    fetchURL = 'https://www.loc.gov/search/?q=' + searchTerm + '&fo=json';
  }
  if (!searchTerm && selectedOption){
    console.log('F T')
    fetchURL = 'https://www.loc.gov/' + selectedOption + '/?&fo=json';
  }
  if (!searchTerm && !selectedOption){
    alert('Please choose an option')
    return
  }

  fetch(fetchURL).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      console.log(data)
      for (var item of data.results) {
        console.log(item.title)
      }
    })

  return fetchURL.json
};

buttonEL.addEventListener('click', submit);
