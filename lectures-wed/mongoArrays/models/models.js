var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/lecturesEvening';
mongoose.connect(connectionString);

var pageSchema = mongoose.Schema({
    name: String,
    widget: [{type: mongoose.Schema.Types.ObjectId, ref: 'LecturesWidgetModel'}]
}, {collection: 'lectures.evening.arrays.page'});

var pageModel = mongoose.model('LecturesPageModel', pageSchema);

var widgetSchema = mongoose.Schema({
    name: String,
    type: {type: String, enum: ['YOUTUBE', 'IMAGE', 'PARAGRAPH']}
}, {collection: 'lectures.evening.arrays.widget'});

var widgetModel = mongoose.model('LecturesWidgetModel', widgetSchema);

// pageModel.create({name: 'Home'});

// widgetModel.create({name: '0 widget', type: 'YOUTUBE'});
// widgetModel.create({name: '1 widget', type: 'PARAGRAPH'});
// widgetModel.create({name: '2 widget', type: 'IMAGE'});

// pageModel.findById('58d304b62ded05674fb24afb', function (err, page) {
//     console.log(page);
//     page.widget.push('58d305377ba714681cf442de');
//     page.widget.push('58d305377ba714681cf442df');
//     page.widget.push('58d305377ba714681cf442e0');
//     page.save(function (err, page) {
//         console.log(page);
//     });
// });

function reorderWidgets(start, end) {
    pageModel.findById('58d304b62ded05674fb24afb', function (err, page) {
        console.log(page);
        page.widget.splice(end, 0, page.widget.splice(start, 1)[0]);
        console.log(page);
        page.markModified('widget');
        page.save(function (err, page) {
            console.log(page);
        });
    });
}

reorderWidgets(0, 2);