import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';

import { bindActionCreators } from 'redux';
import AuthService from '../store/apis/auth';

class Auth extends Component {
    props: any;
    state: any;
    constructor(props: any) {
        super(props);

        this.state = {
            checkingJwt: true
        };
    }

    onAutoLogin = () => {
        // call action to set userdata;
        AuthService.signInWithToken()
            .then(user => {
                this.props.setUserData(user);
                this.setState({ checkingJwt: false })
            })
    }
    onAutoLogout = () => {
        // call action to remove the user
        this.props.logout();
        this.setState({ checkingJwt: false })
    }

    componentDidMount() {
        AuthService.on("onAutoLogin", this.onAutoLogin);
        AuthService.on("onAutoLogout", this.onAutoLogout);
        AuthService.init();
    }

    componentWillUnmount() {
        AuthService.off("onAutoLogin", this.onAutoLogin);
        AuthService.off("onAutoLogout", this.onAutoLogout);
    }

    render() {
        const { children }: any = this.props;
        
        if (this.state.checkingJwt) return <div>Loading...</div>

        return (
            <>
                {children}
            </>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({
        logout: Actions.actionLogout,
        setUserData: Actions.actionSetUserData,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
