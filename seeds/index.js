const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "Irene",
        password: "hello@1"
    },
    {
        username: "Ian",
        password: "hello@2"
    },
    {
        username: "Venith",
        password: "hello@3"
    },

]

const blogs = [
    {
        title: "The Future of Artificial Intelligence in Healthcare",
        content: "Artificial Intelligence (AI) is revolutionizing the healthcare industry, from diagnosis and treatment to drug discovery and patient care. This blog post explores the promising applications of AI in healthcare and how it's shaping the future of medicine.",
        userId: 1
    },
    {
        title: "The Importance of Cybersecurity",
        content: "Cybersecurity is a critical aspect of modern businesses as cyber threats continue to evolve...",
        userId: 1
    },
    {
        title: "Introduction to Machine Learning",
        content: "Machine learning is a branch of artificial intelligence that enables computers to learn from data and make predictions or decisions without explicit programming.",
        userId: 2
    },
    {
        title: "The Rise of Augmented Reality in Gaming",
        content: "Augmented reality (AR) gaming is taking the gaming industry by storm, blurring the lines between virtual and real-world experiences.",
        userId: 3
    },
]

const comments = [
    {
        body: "great post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "i agree!",
        blogId: 3,
        userId: 2
    },
    {
        body: "very well said!",
        blogId: 4,
        userId: 1
    },
    {
        body: "exactly!",
        blogId: 2,
        userId: 3
    },

]

const seedData = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

seedData()