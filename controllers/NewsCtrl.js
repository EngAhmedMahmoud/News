const news = require("./../models/News");

//add news
exports.add = (req, res, next) => {
    let title = req.body.title;
    let details = req.body.details;
    let author = req.body.author;
    let addNews = new news({
        title: title,
        details: details,
        author: author
    });
    addNews.save()
        .then((news) => {
            res.status(201).json({
                news: news
            });
        }).catch((error) => {
            res.status(500).json({
                error: error
            });
        });

}
//index page
exports.index = (req, res, next) => {
    news.find()
        .then((news) => {
            res.render(__dirname + "/../views/pages/index", { news: news });
        })
        .catch((error) => {
            res.render(__dirname + "/../views/partials/custom", { error: error });
        });
}


