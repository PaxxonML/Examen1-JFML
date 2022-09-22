const path = require('path');

exports.getPagina = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'info.html'));
}

exports.getForm = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'form.html'));
}

exports.validateTriangle = (req, res) => {
    const ang1 = parseInt(req.body.ang1,10);
    console.log(ang1);
    const ang2 = parseInt(req.body.ang2,10);
    console.log(ang2);
    const ang3 = parseInt(req.body.ang3,10);
    console.log(ang3);
    let rectTriangle = false;
    console.log(rectTriangle);
    console.log(ang1 + ang2 + ang3);
    console.log(ang1 + ang2 + ang3 === 180);
    console.log(ang1 === 90);
    console.log(ang2 === 90);
    console.log(ang3 === 90);
    if (ang1 + ang2 + ang3 === 180 && (ang1 === 90 || ang2 === 90 || ang3 === 90)) {
        rectTriangle = true;
    }
    console.log(rectTriangle);
    res.json({trianguloRect: rectTriangle});
}