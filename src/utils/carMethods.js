import websiteData from "../assets/websiteData.json"

/* Show every models in that brand Ex. ['ModelS', 'Model3', 'ModelX', 'ModelY']*/
export const getModelsFromBrand = (carbrand) => {
    return websiteData[carbrand].model.map(
        (model) => Object.keys(model)[0]
    );
}

/* Get every cars brand as and Object*/
export const getBrandsList = () => {
    return Object.keys(websiteData)
};

/* 🚨 Doesn't use only internal use case only 🚨 */
const getModelDetail = (carbrand) => {
    return websiteData[carbrand].model.map(model => {
        return { modelName: Object.keys(model)[0], cars: model[Object.keys(model)] }
    })
}

/* ใช้ในหน้า /:carbrand เพื่อนำข้อมูลทั้งหมดออกมาแบ่งเป็น {modelName:String , carsOnEachModel:[] } */
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

/* Get model of specific carname */
export const getModelFromCarName = (carbrand, carName) => {
    return getEveryCarAndModelInBrand(carbrand).find(model => {
        if (model.carsOnEachModel.map(model => model.name).includes(carName)) {
            return true
        }
    }).modelName
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

// IMG:Step - 1 get only URL but doesn't contain image file
export const getImageURL = (carbrand, modelName, carName) => {
    return `car-images/${carbrand}/${modelName}/${carName}`.replaceAll(" ", "_");
}

// IMG:Step - 2 Get image type for image
export const getImgageFileType = (carbrand, carName, index) => getEachCarDetail(carbrand, carName).srcImg[index]

// IMG:Step - 3 FINAL GET IMAGE! ✨ We'll need to combined imageURL with imageFielType
export const getCarImage = (carbrand, modelName, carName, imageIndex) => {
    return getImageURL(carbrand, modelName, carName) + "/" + getImgageFileType(carbrand, carName, imageIndex)
}