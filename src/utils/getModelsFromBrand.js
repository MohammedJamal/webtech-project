import websiteData from "../assets/websiteData.json"

const getModelsFromBrand = (carbrand) => {
    return websiteData[carbrand].model.map(
        (model) => Object.keys(model)[0]
    );
}

export const getModelsList = () => {
    return Object.keys(websiteData)
};

/* 🚨 Doesn't use only internal use case only 🚨 */
const getModelDetail = (carbrand) => {
    return websiteData[carbrand].model.map(model => {
        return { modelName: Object.keys(model)[0], cars: model[Object.keys(model)] }
    })
}

export const getEveryCarAndModelInBrand = (carbrand) => {
    return getModelDetail(carbrand).map((model) => {
        const carsOnEachModel = Object.keys(model.cars).map(
            (key) => model.cars[key]
        ); // เรามีชื่อ model อยู่ที่มาจากแต่ละ brand ทำการ หาว่าแล้วใน model นี้มีรถยีรุ่นไหนที่แตกย่อยลงมาอีกบ้าง
        return { modelName: model.modelName, carsOnEachModel }
    })
}

export const getEachCarDetail = (carbrand, car) => {
    return (
        getModelDetail(carbrand).map(model => {
            return Object.keys(model.cars).map(eachCarInModel => {
                return model.cars[eachCarInModel]
            }).find(x => x.name == car)
        }).find(final => final)
    )
}

export const getCarBrandLogo = (carbrand) => {

    const brandMapper = {
        "Porsche": "porsche.png",
        "ferrari": "ferrari.png",
        "lamborghini": "Lamborghini.jpg",
        "maserati": "maserati.png",
        "mercedes-Benz": "benz.png",
        "bentley": "bentley.png",
        "audi": "audi.jpg",
        "astonMartin": "astonmartin.png",
        "tesla": "tesla.png"
    }

    return brandMapper[carbrand]
}

// get only URL but doesn't contain image file
export const getImageURL = (carbrand, modelName, carName) => {
    return `car-images/${carbrand}/${modelName}/${carName}`.replaceAll(" ", "_");
}

// Get image type for image
export const getImgageFileType = (carbrand, carName, index) => getEachCarDetail(carbrand, carName).srcImg[index]

// We need to combined imageURL with imageFielType
export const getCarImage = (carbrand, modelName, carName, imageIndex) => {
    return getImageURL(carbrand, modelName, carName) + "/" + getImgageFileType(carbrand, carName, imageIndex)
}

export default getModelsFromBrand;
