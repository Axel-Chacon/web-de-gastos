   let cont = 0;
   let suma = 0;
   let cut = 0;
   
    function add() {
        let name = $("#userName").val();
        let money = $("#userMoney").val();
        cont += 1;

        distribute(name,money,cont);

        let nameToShow = `<h6> ${name}: </h6>`
        let moneyToShow = `<h6> $  ${money} </h6>`

        $("#historyName").append(nameToShow);
        $("#historyMoney").append(moneyToShow);
    }

    function distribute(person,spent,c) {
        suma += parseInt (spent);
        $("#result").text("$" + suma);
     
        cut = suma / c;
        $("#cut").text("$" + (Math.round(cut)));

        
    }