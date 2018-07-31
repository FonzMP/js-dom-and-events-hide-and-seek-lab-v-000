function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let eachLi = document.querySelectorAll('ul.ranked-list li')

  return eachLi.forEach(function(li) {
    const text = li.innerHTML
    return li.innerHTML = (parseInt(text) + parseInt(n))
  })
}