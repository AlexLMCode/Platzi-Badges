import React from 'react';

class BadgeForm extends React.Component {

    /*state = {};*/
    /*Inicializamos state para no causar conflictos cuando agregamos valores*/

/*    handleChange = (e) => {
        /!*        console.log(
                    {
                        name: e.target.name,
                        value: e.target.value
                    }
                );*!/
        this.setState({
            //Aqui dependiendo de que input creara una llave con el nombre de el target
            [e.target.name]: e.target.value,
        })
    };*/

    handleClick = (e) => {
        console.log("button was clicked")
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('event submitted');
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Firts Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firtsName"
                            value={this.props.formValues.firtsName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                        {/*     Con el atributo value lo que introduzcamos no se guarda dos veces, en el form y en el
                        setState, solo en el setState*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;