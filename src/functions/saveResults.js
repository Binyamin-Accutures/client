import { ImageConversion } from "./ImageConversion";
const saveResults = (obj) => {
    console.log(obj);
    ImageConversion(obj.imagePath, obj);

}
export default saveResults;
