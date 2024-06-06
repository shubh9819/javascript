function marks(){
    let sname=document.getElementById("sname").value;
    let rnumber=document.getElementById("rnum").value;
    let clas=document.getElementById("abc").value;

    let java = document.getElementById("j").value;
    let python=document.getElementById("p").value;
    let c=document.getElementById("c").value;
    let r=document.getElementById("r").value;
    let cplus=document.getElementById("cp").value;
    let html=document.getElementById("h").value;
    
    let total = +java + +python + +c + +r + +cplus + +html;
    console.log(total);
    let prc=math.round (total/600*100)

    document.getElementById("name").innerHTML=sname;
    document.getElementById("roll").innerHTML=rnumber;
    document.getElementById("class").innerHTML=clas;
    document.getElementById("per").innerHTML=prc;
    
}