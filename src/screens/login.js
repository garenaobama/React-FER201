import '../styles/Cart.css'
export default function Login(){
    return(
            <div className="container">
                <div className="row">   
                    <div className='col-12 col-xl-2'></div>
                    <div className="col-12 col-xl-8">  
                        <h1>Login</h1>
                        <form>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Email(*)</label>
                                <div class="col-sm-10">
                                <input  class="form-control" id="inputPassword" ></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                                </div>
                            </div>
                            <input type="submit" value="signIn"></input>
                            <a href="#signUp">SignUp</a>
                        </form>
                    </div>
                </div> 
            </div>         
    );
}