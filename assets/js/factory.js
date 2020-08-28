// sort of a syntactic hack
// idiom; using tools that accomplish some end goal

function WorkShopModule(teacher) {
  var publicAPI = { ask, }
  return publicAPI;

  function ask(question) {
    console.log(teacher, question)
  }
}

var workshop = WorkShopModule('Kyle');

workshop.ask('It\'s a module right?')