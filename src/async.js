function getComponents(){
 return import('lodash').then(({default:_})=>{
    const el = document.createElement('div')
    el.innerHTML = _.max([1,3,7,0,8,10])
    return el
  })
}
getComponents().then(el=>{
  document.body.appendChild(el)
})