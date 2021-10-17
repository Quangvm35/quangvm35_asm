
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "./Add";
import { remove } from "./api/productAPI";
import Detail from "./Detailproduct";
import Edit from "./Edit";

const Product =(props) =>{
    const { url } = useRouteMatch();

    const removeProduct = async (id) =>{
        try {
            remove(id);
            props.onDelete(id);
        } catch (error) { }

    };
    return(
        <div className="bg-primary">
            <Switch>
                <Route exact path={url}>
                    {props.products.map((item,index)=>(
                         <div className="col"  key={index}>
                         <div className="card shadow-sm">
                         <img src={item.image} className="img-thumbnail" alt="img" />
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                             <div className="d-flex justify-content-between align-items-center">
                               <div className="btn-group">
                                   <div className="d-flex justify-content-end">
                                         <button onClick={() => removeProduct(item.id)} type="button" className="btn btn-sm btn-outline-danger" >Delete</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`/product/${item.id}/edit`}>Edit</Link></button>
                                   </div>
                                 </div>
                             </div>
                           </div>
                         </div>
                    ))}
                     </Route>
                     <Route path={`${url}/add`} exact>
                         <AddProduct {...props} />
                    </Route>
                    <Route path={`${url}/:id`} exact>
                         <Detail/>
                    </Route>
                    <Route path={`${url}/:id/edit`} exact>
                        <Edit {...props} />
                    </Route>
            </Switch>
        </div>
    );
};
export default Product;