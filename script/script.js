const wrap = document.querySelector(".wrapper")

for(let i=0;i<20;i++){
    if(i%2==0){
        wrap.innerHTML+=`
        <div class="wordWrap">
        <h1>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        <h2>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        <h3>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        <h4>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        <h5>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        <h6>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        </div>
        `
    }
    else{
        wrap.innerHTML+=`
        <div class="wordWrap">
        <h6>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h6>
        <h5>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h5>
        <h4>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h4>
        <h3>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h3>
        <h2>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h2>
        <h1>Канышай oneLove <img width="20px" height="20px" src="https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Star-Transparent-PNG.png" alt=""></h1>
        </div>
        `
    }


}