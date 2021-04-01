const knex = require("../../db.js");
var express = require('express');
var router = express.Router();
const upload = require('../../module/uploadFile');

router.delete('/deleteNews:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('News').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/addNews', function (req, res, next) {
    res.render('private/addNews');
});

router.get('/updateNews:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        let result = await knex('News').where('id', id).select();
        req.status = 201;
        let parsRow = {
            id: id,
            date: result[0].date,
            title: result[0].title
        }
        res.render('private/updateNews', {
            parsRow
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.post('/createNews', upload.none(), async function (req, res, next) {
    try {
        const {date, text} = req.body;
        // debugger;
        await knex("News").insert([{
            title: decodeURI(text),
            date: date
        }]);
        res.end();
    } catch (error) {
        console.log(error);
        next(error);
    }

});

router.patch('/updateNews:id', upload.none(), async function (req, res, next) {
    try{
        const id = req.params.id;
        const {date, text} = req.body;

        await knex('News').where('id', id).update({
            date: date,
            title: decodeURI(text)
        });
        res.end();
    }catch (error){
        console.log(error);
        next(error);
    }
})

module.exports = router;