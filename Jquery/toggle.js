var alternaCor = $(".notification-rows");

alternaCor.each(function (index, elem) {
  var count = 2;
  elem.onclick = function (e) {
    count++;
    console.log(e, e.target.className);
    if ($(e.target).is("input")) {
      $(elem).toggleClass("nome-da-classe");
    }
    console.log(elem, e.target);
  };
});
