const mongoose = require("mongoose")

const franchiseSchema = new mongoose.Schema({
    title: String,
    content: String,
    country:String,
    startYear: Number,
    branchCount: Number,
    averageCost: Number,

    brand:[String],
    cover:[String],
    images: [String],

    translations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Translation"
        }
    ],

    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag",
        }
    ],
},{ timestamps: true })


// mongoose middleware for creating unique code
franchiseSchema.pre("save", async function (next) {
    try {
        if (!this.code) {
            const latestFranchise = await this.constructor.findOne({}, {}, { sort: { 'code': -1 } });
            let counter = 1;
            if (latestFranchise && latestFranchise.code) {
                const latestCounter = parseInt(latestFranchise.code.slice(2), 10);
                counter = latestCounter + 1;
            }

            const paddedCounter = counter.toString().padStart(3, '0')
            this.code = `HCF${paddedCounter}`
        }

        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("Franchise", franchiseSchema)