function getInfo() {
    var mysql = require('mysql'); //používa modul mysql z "npm install mysql" na manipuláciu s databázou

    var con = mysql.createConnection({  // vytvorenie pripojenia k databáze
        host: "localhost",
        user: "root",
        password: "",
        database: "database"
    });

    con.connect(function (err) {  // pripojenie k databáze a overenie úspešnosti pripojenia
        if (err) throw err;
        console.log("Pripojenie k databáze úspešné!");
    });


    var username = document.getElementById("firstname").value;
    console.log("ahoj " + username);


    var sql = "INSERT INTO table_1 (firstname,lastname,age) VALUES ('" + username + ""','b','c')"; // premenná sql ktorá bude použitá pre dopyt

    con.query(sql, function (err, result) {  // co s tym result
        if (err) throw err;
        console.log("Record inserted");
    });


    con.end(); // odpojenie databázy

}