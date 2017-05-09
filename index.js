function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  const node=document.getElementById('grand-node').querySelectorAll('div')
  return node[node.length-1]
}

function increaseRankBy(n){
  const node=document.getElementById('app').querySelectorAll('.ranked-list li')
  for(var i=0;i<node.length;i++){
    node[i].innerHTML=parseInt(node[i].innerHTML)+n
  }
}
