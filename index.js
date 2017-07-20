function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested div.target')
}

function deepestChild(){
  let grandNode = document.querySelectorAll('#grand-node div')
  return grandNode[grandNode.length - 1]
}

function increaseRankBy(n){
  let allRanks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < allRanks.length; i++){
    let rankInt = parseInt(allRanks[i].innerHTML)
    allRanks[i].innerHTML = rankInt + n
  }
}
