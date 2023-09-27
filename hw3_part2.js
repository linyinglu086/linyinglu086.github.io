         
            function calculate() {
                var items = document.getElementsByClassName("item");      
                var eTable = document.getElementById("itemSold");
                const rowLength = eTable.rows.length;
                var sum3rd = 0;
                var sum4th = 0;
                for (var i=1; i<rowLength-2; i++) {
                    var eRow = eTable.rows[i].cells;
                    eRow[2].innerHTML = items[i-1].value;
                    eRow[3].innerHTML = (parseFloat((eRow[1].innerHTML).replace(/[^0-9.-]+/g,"")) * items[i-1].value).toFixed(2);  
                    sum3rd += parseInt(eRow[2].innerHTML);
                    sum4th += parseInt(eRow[3].innerHTML);                 
                }
                // the 5th, 6th row of the table
                eTable.rows[5].cells[1].innerHTML = sum3rd;
                eTable.rows[6].cells[1].innerHTML = sum4th;
            }

