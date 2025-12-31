const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true,
        },
       
        price: {
            type: Number,
            required: [true, 'A tour must have a price']
        },
        ratingsAverage: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0']
        },
        
    }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
