function menuClick(obj){
    var css = obj.className;
    var child = obj.parentElement.children;

    for(var i=0;i < child.length;i++){
       if(child[i].className == "last list-visited"){
           child[i].className = "last";
       }else{
           child[i].className = "";
       }
    }
    if(css == "last"){
        obj.className = "last list-visited";
    }else{
        obj.className = "list-visited";
    }
}