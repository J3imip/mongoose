const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/Admin`, {useNewUrlParser: true, useUnifiedTopology: true});

class mongoClient {
    constructor (collection, schema) {
        this.collection = collection;
        this.schema = schema;
    }
    async findOne(obj) {
        const Schema = mongoose.model(this.collection, this.schema);
        var result;
        await Schema.findOne(obj)
            .then(res => {result = res});
        return result;
    }
    async find(obj) {
        const Schema = mongoose.model(this.collection, this.schema);
        var result;
        await Schema.find(obj)
            .then(res => {result = res});
        return result;
    }
    async insertOne(schema) {
        var result;
        await schema.save()
            .then(res => {result = res});
        return result;
    }
    async updateOne(find, edit) {
        const Schema = mongoose.model(this.collection, this.schema);
        var result;
        await Schema.updateOne(find, edit)
            .then(res => {result = res});
        return result;
    }
}

module.exports = {mongoClient};