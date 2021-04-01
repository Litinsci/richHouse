const knex = require("../../db.js");
var express = require('express');
var router = express.Router();
const upload = require('../../module/uploadFile');

router.get('/', async function (req, res, next) {
    let result = await knex.select("*").from('Shares');
    res.render('private/shares',{baseShares:result});
});

router.get('/addShares', async function (req, res, next) {
    res.render('private/addShares');
});

router.post('/addHeandler', upload.single('file'), async function (req, res, next) {
    try {
        const {date, text,file} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = './images/' + req.file.filename;
            console.log(req.body);
            await knex("Shares").insert({
                title: decodeURI(text),
                date: date,
                img_src : fileSrc
            });

        }else{
            res.status(500).end();
        }

        res.end();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.delete('/deleteShares:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('Shares').where('id', id).del();   
        res.status(200).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/updateShares:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        let result = await knex('Shares').where('id', id).select();
        let parsRow = {
            id: id,
            date: result[0].date,
            title: result[0].title,
            img_src : result[0].img_src
        }
        res.render('private/updateShares', {
            parsRow
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.patch('/updateShares:id', upload.single('file'), async function (req, res, next) {
    try{
        const id = req.params.id;
        const {date, text,file} = req.body;
        let fileSrc;
        // console.log(id);
        // debugger;
        if(req.file){
            fileSrc = './images/' + req.file.filename;
            console.log(req.body);
            // debugger;
            await knex('Shares').where('id', id).update({
                title: decodeURI(text),
                date: date,
                img_src : fileSrc
            });
        }else{
            res.status(500).end();
        }
        res.end();
    }catch (error){
        console.log(error);
        next(error);
    }
})

module.exports = router;