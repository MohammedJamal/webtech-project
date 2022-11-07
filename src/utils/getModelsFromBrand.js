import websiteData from "../assets/websiteData.json"

const getModelsFromBrand = (carbrand) => {
    return websiteData[carbrand].model.map(
        (model) => Object.keys(model)[0]
    );
}

export const getModelsList = () => {
    return Object.keys(websiteData)
};

export const getModelDetail = (brand) => {
    return websiteData[brand].model.map(model => {
        return { modelName: Object.keys(model)[0], cars: model[Object.keys(model)] }
    })
}

export default getModelsFromBrand;