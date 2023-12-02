const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    title:String,
    summary: String,
    content: String,

    startingPrice: Number,
    totalArea: Number,
    totalUnits: Number,

    
    startYear:String,
    endYear:String,
    city: String,
    neighborhood: String,
    mapUrl: String,

    isPreSale: Boolean,
    isInstallment: Boolean,

    images: [String],
    video: String,

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

    facilities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Facility",
        }
    ],

    code: {
        type: String,
        unique: true,
    }
}, { timestamps: true })

// mongoose middleware for creating unique code
projectSchema.pre("save", async function (next) {
    try {
        if (!this.code) {
            const latestProject = await this.constructor.findOne({}, {}, { sort: { 'code': -1 } });
            let counter = 1;
            if (latestProject && latestProject.code) {
                const latestCounter = parseInt(latestProject.code.slice(2), 10);
                counter = latestCounter + 1;
            }

            const paddedCounter = counter.toString().padStart(3, '0')
            this.code = `HC${paddedCounter}`
        }

        next()
    } catch (error) {
        next(error)
    }
})


module.exports = mongoose.model("Project", projectSchema)