import hello from './helloword'
import imgsrc from './assets/1.png'
import imgsvg from './assets/1.svg'
import imgtxt from './assets/1.txt'
import './a.css'
import './style.less'
import _ from 'lodash'
import './async'
hello()
const img  = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);

const svg  = document.createElement('img');
svg.src = imgsvg;
document.body.appendChild(svg);

const txt  = document.createElement('div');
txt.textContent = imgtxt;
txt.classList.add('back')
document.body.appendChild(txt);
document.body.classList.add('red')
console.log(_.max([1,2,4]));


const button  =document.createElement('button');
button.textContent = '加'
button.addEventListener('click',()=>{
  //懒加载js
  //预获取 webpackPrefetch:true
  //预加载 webpackPreload:true
  import(/*webpackChunkName:'wsm.math',webpackPreload:true*/'./math').then(({add})=>{
    console.log(add(10,20));
  })
})
document.body.appendChild(button)

