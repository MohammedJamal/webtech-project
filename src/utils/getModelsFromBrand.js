import websiteData from "../assets/websiteData.json"

const getModelsFromBrand = (carbrand) => {
    return websiteData[carbrand].model.map(
        (model) => Object.keys(model)[0]
    );
}

export const getModelsList = () => {
    return Object.keys(websiteData)
};

export const getModelDetail = (carbrand) => {
    return websiteData[carbrand].model.map(model => {
        return { modelName: Object.keys(model)[0], cars: model[Object.keys(model)] }
    })
}

export const getEachCarDetail = (carbrand, car) => {
    return(
        getModelDetail(carbrand).map(model => {
            return Object.keys(model.cars).map(eachCarInModel => {
                return model.cars[eachCarInModel]
            }).find(x => x.name == car)
        }).find(final => final)
    )
}

export default getModelsFromBrand;