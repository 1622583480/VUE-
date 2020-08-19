import axios from '../plugins/index'
export default function getstudent() {
    axios.get("/AKSKw/kcna/xksnwk", {
        // 这里写参数 
        goodlist: 1,
        type_one: "asd",
    }).then((Response) => {
        return Response
    }).catch((Response) => {
        return Response
    });
}