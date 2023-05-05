import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const testSchema = new Schema({
    //data model here! 
},
    { timestamps: true }
);

const TestModel = mongoose.Model('testModel', testSchema);
export default TestModel;