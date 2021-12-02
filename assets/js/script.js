var buttonEL = document.querySelector('#btn');
var choicesEL = document.querySelector('#choices')
var searchEL = document.querySelector('#search')
var searchTerm = ''
var selectedOption
var fetchURL
var placeholder = document.querySelector('#placeholder')

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
      for (var item of data.results) { 
        var title = item.title
        var url = item.url
        var subject = JSON.stringify(item.subject)
        var description = JSON.stringify(item.description)
        var titleEL = document.createElement('h1') 
        var urlEL = document.createElement('link')
        var subjectEL = document.createElement('h2') 
        var descriptionEL = document.createElement('h3')

        titleEL.className = ''
        urlEL.className = ''
        subjectEL.className = ''
        descriptionEL.className = ''

        titleEL.textContent = title
        urlEL.textContent = url
        subjectEL.textContent = subject
        descriptionEL.textContent = descriptionEL

        testDiv.appendChild(titleEL)
        testDiv.appendChild(urlEL)
        testDiv.appendChild(subjectEL)
        testDiv.appendChild(descriptionEL)
      }
    })
    

  return fetchURL.json
};

buttonEL.addEventListener('click', submit);
