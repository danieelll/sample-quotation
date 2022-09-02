function calcTotal()
         {
            var itemTotal = 0;
            var items = document.getElementsByTagName("input");
        

            for (var i = 0; i < 11; i++)
            {
               if (items[i].checked)
               {
                  itemTotal += (items[i].value * 1);
               }

               document.getElementById("total").innerHTML = "Your order total is: ₱ " + itemTotal + ".00";
    
            }
         }

         var calcButton = document.getElementById("calcButton"); 
         if (calcButton.addEventListener) 
         {
            calcButton.addEventListener("click", calcTotal, false); 
         }
         else if (calcButton.attachEvent)
         {
            calcButton.attachEvent("onclick", calcTotal);   
         }
