$(document).ready(function(){
    $('#lookup').on('click',Request)
   
});
function Request(e){
    e.preventDefault();
    if(($('#country').val()=='') && ($('#all').prop('checked')== false)){
        alert('Please enter a country or check the view all checkbox');
    }
    var sobad = new XMLHttpRequest();
    if( $('#all').prop('checked')){
        var url = 'world.php?all=true';
        sobad.onreadystatechange = message;
        sobad.open('GET',url);
        sobad.send();
    }
    else{
        var url = 'world.php?c='+ $('#country').val();
        sobad.onreadystatechange = message;
        sobad.open('GET',url);
        sobad.send();
    }
}

function message(){
    if(this.readyState==XMLHttpRequest.DONE){
        if(this.status==200){
            var x =this.responseText;
            $('#div2').html(x);
        }
    }
}