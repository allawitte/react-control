class SubscribeForm  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formClass: 'form form--subscribe'
        }

    }
    validate(e){
        const toggleClass = (toClass, fromClass) => {
            let formClasses = this.state.formClass.split(' ');
            if(formClasses.indexOf(fromClass) > -1){
                formClasses.splice(formClasses.indexOf(fromClass), 1);
            }
            if(formClasses.indexOf(toClass) == -1){
                formClasses.push(toClass);
            }
            return formClasses.join(' ');
        }

        if(! e.target.validity.valid){
            this.setState({
                formClass: toggleClass('is-error', 'is-valid')
            })
        }
        else {
            this.setState({
                formClass: toggleClass('is-valid', 'is-error')
            })
        }
    }
    render(){
        return (
            <div className="subscribe__form">
                <form className={this.state.formClass}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input type="email"
                               id="input-email"
                               placeholder="Email"
                               onChange={this.validate.bind(this)}
                               className="form-control"/>
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

};