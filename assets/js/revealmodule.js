// modules require encapsulation which entails and information and visibility controls over properties
// Revealing Module Pattern
var workshop = (function Module(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question)
  }
})('Kyle')

workshop.ask('It\'s a module right ?')