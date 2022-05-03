const express = require("express");


const app = express();


// הגדרות

app.get('/', (req,res) => {


    // __dirname - משתנה קבוע שמחזיק את הכתובת של הפרויקט הנוכחי
    res.sendFile(__dirname + '/index.html');
    console.log('bzzzzz');
});




// הפעלה

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});