import mongoose from 'mongoose';

const connectDB = (url) =>
    mongoose
        .connect(url)
        .then(() => console.log('Dabase connect'))
        .catch((error) => console.log(error));

export default connectDB;
