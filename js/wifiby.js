// $(document).ready(function () {
window.onload = function () {
  function count() {
    console.log("in count");
    let countItems = document.querySelectorAll(".count");
    console.log(countItems[0]);
    console.log(countItems[1]);
    console.log(countItems[2]);
    countItems.forEach(function (item) {
      let i = 0
      let max = parseInt(item.innerHTML);
      // item.innerHTML = i;
      let countInterval = (function () {
        console.log("here");
        item.innerHTML = i;
        i++;
        if (i == max) clearInterval(countInterval);
      }, 1);
      // for (let i = 0; i < max + 1; i++) {
      // }
    });
  }

  var element;
  var windowHeight;

  function init() {
    element = document.querySelector('#count-container');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    // for (var i = 0; i < elements.length; i++) {
    //   var element = elements[i];
    // var positionFromTop = elements[i].getBoundingClientRect().top;
    var positionFromTop = element.getBoundingClientRect().top;
    // console.log(positionFromTop);
    // console.log(windowHeight);
    console.log(positionFromTop - windowHeight);
    if (positionFromTop - windowHeight <= 0) {
      count();
      // element.classList.add('fade-in-element');
      // element.classList.remove('hidden');
    }
    // }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
  // });
}
