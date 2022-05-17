const { CourseModel } = require("../database-models/courses-model");

const createCourses = async ({ name, description }) => {
    await CourseModel.create({
        name: name,
        description: description
    })

    return `Operation created successfully`

}
const getAllCourses = async () => {
    const course = await CourseModel.find();

    return course;
}
const getCourseById = async (courseId) => {
    const course = await CourseModel.findById({ _id: courseId })

    return course;
}
const deleteCourseById = async (courseId) => {
    await CourseModel.deleteOne({ _id: courseId });

    return `Operation deleted successfully`;

}
const updateCourseById = async (courseId, { name, description }) => {
    await CourseModel.updateOne({ _id: courseId }, { name: name, description: description })

    return `Operation updated successfully`;
}
module.exports = { createCourses, getAllCourses, getCourseById, deleteCourseById, updateCourseById }