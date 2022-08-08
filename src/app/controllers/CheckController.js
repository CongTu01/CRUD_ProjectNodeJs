class CheckController {
        //[get] /check
        index(req,res)
        {
            res.render('check');
        }

        //get /check/chitiet

        show(req,res)
        {
            res.send('aaaaaa');
        }
}

module.exports = new CheckController;