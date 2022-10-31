import './Form.css';

export function Login({ idLoginName, idLoginPass, value, setLogin, setSignup, onChange, loginCurrentUser }) {

    function handleLogin(event){
        event.preventDefault();
        loginCurrentUser() ;
    }

    return (
        <div className='modal__form'>
            <button 
                className='modal__btn__close' 
                onClick={() => setLogin(false)}>
                X
            </button>
            
            <form onSubmit={handleLogin} className='inputs__wrapper'>
                <h2>LOGIN</h2>
                <input 
                    className='input'
                    type='text' 
                    id={idLoginName} 
                    name={idLoginName} 
                    value={value.loginName} 
                    onChange={onChange} 
                    placeholder='Username'
                    required
                    minLength='4'
                />
                <input 
                    className='input' 
                    type='password'  
                    id={idLoginPass} 
                    name={idLoginPass} 
                    value={value.loginPass}
                    onChange={onChange} 
                    placeholder='Password'
                    required
                    minLength='9'
                />
                <button 
                    className={'modal__form__cta'}
                    type='submit'
                    onClick={() =>handleLogin()}
                >
                    Sign In
                </button>
                <button 
                    className='modal__form__cta cta__Signup'
                    onClick={() =>{
                        setLogin(false);
                        setSignup(true);
                    }}>
                    Create an Acccount
                </button>
                
            </form>
        </div>
    );
}