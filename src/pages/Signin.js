import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../api/Firebase"; 
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin()  {
    let history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data)=>{
        try {
            //call api
            await signInWithEmailAndPassword(auth, data.email, data.password);
           alert("đăng nhập thành công")
            history.push("/Home");
        } catch (error) {
            toast.error(error.message);
        }
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}> 
        <ToastContainer />
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" className="form-control"  placeholder="name@example.com" {...register("email")} />
            <br />
            {errors.email && <span>email is register</span>}
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Pass word</label>
           <input type="password" className="form-control" placeholder="password" {...register("password")} />
           <br />
            {errors.password && <span>password is register</span>}
        </div>
        <button type="submit">Đăng nhập</button>
        </form>
    );
}
