const HashTable = require("./HashTable");


module.exports = ()=>{

    let studentsTable = new HashTable(3);

    studentsTable.put(4,"Jam")
    studentsTable.put(5,"Edward" )
    studentsTable.put(1,"Maryam")
    studentsTable.put(11,"Mohammed")
    studentsTable.put("lover","Jordan")
    studentsTable.put(5,"Kaziah")

    console.log(studentsTable.print())

}