/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 05.10.22
Assignment 1  */

//const { event } = require("jquery");

//functions from client side view

(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();