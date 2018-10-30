import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxi/Auxius';

const withErrorHandle = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentDidMount () {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error: null });
                return req;
            })
            this.resInterceptors = axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error });
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        errorConfigHandle = () => {
            this.setState({error: null})
        }
        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfigHandle}>
                    {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>                    
            );
        }
    }
}

export default withErrorHandle;