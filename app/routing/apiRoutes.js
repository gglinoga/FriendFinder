
    //     require('../data/friends');

    // }

var express = require('express');
var app = express();
    //$(submit)on (click),

    //newFriend = new Friend(name, pic, 1, 2, 3, 4, 5)

    //(friends.arr).push(newFriend)
    //
    var friends = require('../data/friends');

    var newPal = new Pal("testname", "testpic", 'q1', 'q2', 'q3', 'q4', 'q5')

    function Pal(name, pic, q1, q2, q3, q4, q5) {
        this.name = name;
        this.pic = pic;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
    }
    console.log('a ' + friends);
console.log(newPal)
    app.post('/survey', (req, res) => {
        console.log(req.body);
        // friends.push(newPal);
        // console.log(newPal);
        // console.log(friends);
        // res.json(friends);
    });
    // console.log('c ' + friends);
    //on click  
    //form -> constructor function -> object -> post



