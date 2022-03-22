const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log("err : "+err);
})