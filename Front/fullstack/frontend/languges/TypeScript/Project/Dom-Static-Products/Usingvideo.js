let div=document.getElementById('root')


let myproducts=[
    {name:'t-shirt',video:'./1.mp4'},
    {name:'shirt',video:'./1.mp4'},
    {name:'pants',video:'./1.mp4'}
]

function displayProducts(){
   



    myproducts.map((item)=>{
        let video=document.createElement('video')
        video.src=item.video
        video.style.width="200px"
        video.controls=true
        div.appendChild(video)
       
    })
}
