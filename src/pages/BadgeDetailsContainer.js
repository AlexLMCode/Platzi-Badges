import React from 'react';
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import './styles/BadgeDetails.css'
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);

            this.setState({loading: false, data: data})

        } catch (e) {
            this.setState({loading: false, error: e})
        }

    }

    componentDidMount() {
        this.fetchData()
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen: false})
    }
    handleOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    handleOnDeleteBadge = async (e) => {
        this.setState({loading: true, error: null});
        try {
            await api.badges.remove(this.props.match.params.badgeId)

            this.props.history.push('/badges')
        } catch (e) {
            this.setState({loading: false, error: e})
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }


        return (
            <BadgeDetails
                badge={this.state.data}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleOnDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainer;