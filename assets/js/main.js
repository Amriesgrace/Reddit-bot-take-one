$(document).ready(function() {
    var output = "";
    var display = document.getElementById('display_msg');
    var saveBtn = document.getElementById('saved');

    $("#saved").click(function(){
        displayHandler();
    });

    function displayHandler(e){
        //console.log(display);
        output= `
         <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Saved Changes</strong> 
            <br>
            <br>
            Your Changes have been saved!
        </div>
        `;
        display.innerHTML = output;
        console.log(output);
        
    }
    //displayHandler();
   


})