import SimpleSchema from 'simpl-schema';

const DonutsSchema = new SimpleSchema({
    name: {
        type: String
    },

    imageUrl: {
        type: String,
        optional: true
    },

    isComestible: {
        type: Boolean,
        optional: true
    },

    price: {
        type: Number
    },

    createdAt: {
        type: Date,
        optional: true
    },

    userId: {
        type: String,
        optional: true
    }
});

export default DonutsSchema;