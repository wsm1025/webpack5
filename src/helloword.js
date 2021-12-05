
function a() {
  return new Promise((res, rej) => {
    res(0)
  })
}
async function av() {
  let s = await a();
  let x = ()=>{
    console.log('qqq')
  }
  var y = [...'sty']
  console.log(y);
  x()
  console.log(s);
}

export default av
