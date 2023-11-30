const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    title:String,
    summary: String,
    content: String,

    startingPrice: Number,
    totalArea: Number,
    type: String,
    totalNumberUnits: Number,
    startYear:String,
    endYear:String,
    city: String,
    neighborhood: String,
    mapUrl: String,

    isPreSale: Boolean,
    isInstallment: Boolean,

    isHaveOpenPool: Boolean,
    isHaveConveredPool: Boolean,
    isHaveCentralAntenna: Boolean,
    isHaveEmergencyPower: Boolean,
    isHaveChildrenPlayground: Boolean,
    isHaveBasketballCourt: Boolean,
    isHaveVolleyballCourt: Boolean,
    isHaveGym: Boolean,
    isHaveAirCondioningSystem: Boolean,
    isHaveShop: Boolean,
    isHaveShopingCenter: Boolean,
    isHaveGreenSpace: Boolean,
    isHaveLobby:Boolean,
    isHaveSalon:Boolean,
    isHaveParking: Boolean,
    isHaveLaundary: Boolean,
    isHaveCafe: Boolean,
    isHaveRestaurant: Boolean,
    isHave24hSecurity: Boolean,
    isHaveCCTV: Boolean,

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