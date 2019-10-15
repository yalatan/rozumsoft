import React, {Component} from 'react'
import Input from './Input'
import './Form.css';
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Form extends Component{
state={
    isFormValid: false,
    formControls:{
        email:{
            value: '',
            type: 'email',
            label: 'email',
            errorMessage: 'not correct information',
            valid: false,
            touched: false,
            validation: {
                requared: true,
                email: true
            }
        },
        password:{
            value: '',
            type: 'password',
            label: 'password',
            errorMessage: 'not correct information',
            valid: false,
            touched: false,
            validation: {
                requared: true,
                minLenght: '123456'
            }
        }
    }
}



    loginHandler =event => { event.preventDedault();
        document.getElementById('root2').style.display = 'none';
    }
        
    
    registerHandler = () =>{}
    submitHandler = event => { event.preventDedault()}
    validateControl(value, validation){
        if(!validation){return true} 
        let isValid = true
if(validation.requared){isValid = value.trim() !== '' && isValid}
if(validation.email){
   isValid = validateEmail(value) && isValid
}
/*if(validation.minLenght){ isValid = value.lenght >= validation.minLenght && isValid}*/
        return isValid 
    }
    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control
        let  isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid  &&  isFormValid
        })
        this.setState({formControls,  isFormValid})
    }
   renderInputs(){
       const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
           const  control = this.state.formControls[controlName]
           return (
               <Input
               key={controlName + index}
               type={control.type}
               value={control.value}
               valid={control.valid}
               errorMessage={control.errorMessage}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                onChange={event => this.onChangeHandler(event, controlName)}
               />
           )
       })
       return inputs
   }
render(){
    return(
        <div className="form_block">
            <h3>Авторизация</h3>
        <form className = "form"  onSubmit={this.submitHandler}>
      
      { this.renderInputs()}
       <button type="succes"
                className = "form--button"
                onClick={this.loginHandler}
                disabled={!this.state.isFormValid} > Log In</button>
                 <button type="primary"
                className = "form--button"
                onClick={this.registerHandler}> Sing Up</button>
                </form > 
                </div>
    )
}
} ;