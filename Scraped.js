import mongoose from "mongoose";

const scrapedSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    imageSrc: {
        type: String
    },
    anchorLink: {
        type: String
    },
    spanText: {
        type: String
    },
    paragraphText: {
        type: String
    },
    source: {
        type: String
    },
    uploadTime: {
        type: String
    }
})

const Scraped = mongoose.model('Scraped', scrapedSchema);
export default Scraped;