export const extractImageUrl = (imageUrl) => {
    if (process.env.NODE_ENV === "production"){
        return `https://homecitygroup.com.tr/` + imageUrl
    } else {
        return `http://localhost:5000/` + imageUrl
    }
}