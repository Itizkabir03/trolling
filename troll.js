console.log("hellowjs")

let div5, div6, div7
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
div5 = document.getElementById('div5');
div6 = document.getElementById('div6');
div7 = document.getElementById('div7');




let denybtn, denybtn2, denybtn3, denybtn4, denybtn5, denybtn6, denybtn7

denybtn = document.getElementById('btn2');
denybtn2 = document.getElementById('btn4');
denybtn3 = document.getElementById('btn6');
denybtn4 = document.getElementById('btn8');
denybtn5 = document.getElementById('btn10');
denybtn6 = document.getElementById('btn12');
denybtn7 = document.getElementById('btn14');



denybtn.addEventListener('click', function(){
    div2.style.visibility = "visible";
    div1.style.visibility = "hidden";
});

denybtn2.addEventListener('click', function(){
    div3.style.visibility = "visible";
    div2.style.visibility = "hidden"
});

denybtn3.addEventListener('click', function(){
    div4.style.visibility = "visible";
    div3.style.visibility = "hidden";
});

denybtn4.addEventListener('click', function(){
    div5.style.visibility = "visible";
    div4.style.visibility = "hidden";
});

denybtn5.addEventListener('click', function(){
    div6.style.visibility = "visible";
    div5.style.visibility = "hidden";
});

denybtn6.addEventListener('click', function(){
    div7.style.visibility = "visible"
    div6.style.visibility = "hidden";
})

denybtn7.addEventListener('click', function(){
    div7.style.visibility = "hidden";
    div1.style.visibility = "visible";
})

function agree(){
    div1.style.visibility = "hidden";
    div2.style.visibility = "hidden";
    div3.style.visibility = "hidden";
    div4.style.visibility = "hidden";
    div5.style.visibility = "hidden";
    div6.style.visibility = "hidden";
    div7.style.visibility = "hidden"
    document.getElementById('div8').style.visibility = "visible";
}