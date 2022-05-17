const { model, Schema } = require("mongoose");

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }]
});
const CourseModel = model("Course", CourseSchema);

module.exports = { CourseModel }
