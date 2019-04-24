function showText(idDiv, button){
$("#"+idDiv).toggle(function(){
    if(button.innerHTML=='Ver mas')
        button.innerHTML = 'menos';
    else
        button.innerHTML = 'Ver mas';
});
}
