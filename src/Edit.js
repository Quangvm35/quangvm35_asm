import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { get, update } from "./api/productAPI";

const Edit =(props)=>{
    const {id} = useParams();
    const history =useHistory();

    const {register,handleSubmit , reset , formState: {errors}} = useForm();
    const [product , setProduct] = useState({});

    useEffect(()=> {
        get(id).then((response)=>{
            setProduct(response.data);
            reset(response.data);
        });
    },[reset]);
    const onSubmit=(data) =>{
        const product ={
            id : id,
            ...data
        };
        update(product).then((response) => {
            props.onUpdate(response.data);
            history.push("/product");
        });
    };
    return(
      
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Update product</h2>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Edit name</label>
          <input type="text" className="form-control"  placeholder="name product" defaultValue={product.name} {...register("name")} />
          <br/>
          {errors.name && <span className="text-warning bg-dark">name is not empty</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Image edit</label>
          <input type="text" className="form-control"  placeholder="link image" defaultValue={product.image} {...register("image")} />
          <br/>
          {errors.image && <span className="text-warning bg-dark">image is not empty</span>}
          <button type="submit">Update</button>
        </div>
        </form>
       
    );
    
};
export default Edit;