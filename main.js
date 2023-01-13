var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetBottom;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;   
        
    }

    //Create an event listener for "mouseup" and call function my_mouseup

    //Create a function named my_mouseup with event e as parameter.
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
   {
    mouseEvent="mouseUP"
   } 
   //Assign "mouseUP" to mouseEvent within the function
    
    
    //Create an event listener for "mouseleave" and call function my_mouseleave
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
   {
    mouseEvent="mouseleave"
   } 
    //Create a function named my_mouseleave with event e as parameter.
    
    //Assign "mouseleave" to mouseEvent within the function
 

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}