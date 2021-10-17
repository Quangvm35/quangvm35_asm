import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {add} from './api/productAPI';


const Addproduct =(props)=>{
    const history =useHistory();
    const {
        register ,
        handleSubmit ,
        formState:{errors} 
    } = useForm();
    const onSubmit = async (product)=>{
        try {
            const {data} =await add(product);
            props.onAdd(data);
            history.push("/product");
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
          <input type="text" className="form-control" {...register("name", {required:true})} placeholder="Name" />
          <br/>
          {errors.name && <span className="text-warning bg-dark">name cannot be empty</span>}
          </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Image</label>
          <input type="text" className="form-control"  placeholder="link image" {...register("image",{required:true})} />
          <br/>
          {errors.image && <span className="text-warning bg-dark">image cannot be empty</span>}
          <button type="submit" className="text-danger">Thêm sản phẩm</button>
        </div>
        </form>
    )
};
export default Addproduct;
