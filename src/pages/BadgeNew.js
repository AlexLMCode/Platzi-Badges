import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";


import "./styles/BadgeNew.css";
import logo from "../images/logo conf.svg";
import star from "../images/estrellas.svg";

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: "",
            lastName: "",
            jobTitle: "",
            email: "",
            twitter: "",
        },
        loading: false,
        error: null,
    };

    handleChange = (e) => {
        this.setState({
            form: {
                /*Aqui le pasamos todos los valores que tenia antes y despues le añadimos el nuevo valor*/
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges')
            //Cada page nos permite usar un prop que las paginas reciben por react router que se llama history y le pusheamos la ruta
        } catch (e) {

            this.setState({loading: false, error: e});
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading/>;
        }
        return (
            <React.Fragment>
                <div
                    className="BadgeNew__hero"
                    style={{backgroundImage: `url(${star})`}}
                >
                    <img src={logo} alt="Logo" className="img-fluid hero__image"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST NAME"}
                                lastName={this.state.form.lastName || "LAST NAME"}
                                jobTitle={this.state.form.jobTitle || "FRONTEND"}
                                twitter={this.state.form.twitter || "twitter"}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                OnSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
