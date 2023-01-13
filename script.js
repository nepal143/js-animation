var id = 0;
function onit(a){
    id = a;
    document.getElementById(id).style.margin ="auto 10px auto -50px ";
    document.getElementById(id).style.backgroundSize ="200%";
    document.getElementById(id).style.animation = "getit 1000ms reverse infinite";
    setTimeout("notonit1(id)", 1000);

}
function notonit1(a){
    id = a;
    document.getElementById(id).style.backgroundSize = "100%";
    document.getElementById(id).style.backgroundPosition = "0%";

}
function notonit(a){
    id = a;
    document.getElementById(id).style.backgroundSize = "100%";
    document.getElementById(id).style.margin ="auto -50px auto -50px ";
}