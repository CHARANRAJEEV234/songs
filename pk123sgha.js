var atemp=3;
function func(){
    const k =["haf@123","ffff",123456];
    var a = document.getElementById("key").value;
    
    if(a==k[0]||a==k[1])
    {
        alert("You are Succesfully Login");
        window.open('first.html');
       
    }
    else{
        atemp--;
        alert("You are entered wrong key, left"+atemp);
        
    }
    if(atemp==0)
    {
        document.getElementById("key").disabled = true;
        
    }
}