import { get } from "./api/productAPI";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    console.log(id);
    const Result = get(id);
    return (
        <div>

        </div>
    );
}
export default Detail;