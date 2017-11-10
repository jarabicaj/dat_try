
var mysql=require('mysql'); //používa modul mysql z "npm install mysql" na manipuláciu s databázou

var con = mysql.createConnection({  // vytvorenie pripojenia k databáze
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
});

con.connect(function(err) {  // pripojenie k databáze a overenie úspešnosti pripojenia
    if (err) throw err;
    console.log("Pripojenie k databáze úspešné!");
});


var users=[                 // vytvorím si pole users [user1,user2,user3]
    {
        firstname: "Jožinko",
        lastname: "Jarabička",
        age: 24
    },

    {
        firstname: "Vladinko",
        lastname: "Jarabička",
        age: 23
    },
    {
        firstname: "Ľudmila",
        lastname: "Jarabičková",
        age: 57
    },
    {
        firstname: "Tata",
        lastname: "Jarabica",
        age: 56
    },
    {
        firstname: "Vikina",
        lastname: "Jarabičková",
        age: 5
    }
];

N=users.length;

var sqlDelete = "DELETE FROM table_1";

con.query(sqlDelete, function (err, result) {
    if (err) throw err;
    console.log("Database Erased");
});

con.query("ALTER TABLE table_1 AUTO_INCREMENT = 1", function (err, result) {
    if (err) throw err;
    console.log("ID vynulované");
});


for (var i=0; i<N; i++)
{
    //console.log(i); ??? robi srandu ??? :D
    var sql = "INSERT INTO table_1 (firstname,lastname,age) VALUES ('" + users[i].firstname + "','" + users[i].lastname + "','" + users[i].age + "')"; // premenná sql ktorá bude použitá pre dopyt

    con.query(sql, function (err, result) {  // co s tym result
        if (err) throw err;
        console.log("Record inserted");
    });

}

con.end(); // odpojenie databázy
