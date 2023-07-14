function changeImg()
{
    var pic=document.getElementById("bulb");
    
    if(pic.src.match("ON"))
    {
        console.log("ON");
        pic.src="BULB-OFF.jpeg";
    }
    else{
        console.log("OFF");
        pic.src="BULB-ON.jpeg";
    }
    function audio()
    {
        document.getElementById("sound");
    }
}