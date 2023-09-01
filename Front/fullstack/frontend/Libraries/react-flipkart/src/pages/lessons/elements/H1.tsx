// function H1(){
//     return <h1>hello im h1</h1>
// }
export let H1:React.FC<{}>=()=>{
    console.log(Calu())
  return  <><h1>hello im h1
      {/* {Calu()} */}
      <Calu />
      {/* <Calu/>
    <Calu/>
    <Calu/> */}
      {/* <Calu/>
    <Calu/>
    <Calu/><Calu/>
    <Calu/>
    <Calu/> */}


  </h1><p>Elements are the smallest building blocks of React apps. An element describes what you want to see on the screen:</p></>
}

function Calu(){
    return <h1>hello im calu</h1>
}