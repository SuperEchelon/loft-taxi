import React from "react";
import { Component } from "react";
import { withAuth } from "../AuthContext/AuthContext";
import PropTypes from 'prop-types'

export class Login extends Component {
    static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    navigateTo: PropTypes.func.isRequired
    }

    goToMap = () => {
        if (this.props.isLoggedIn) {
            this.props.navigateTo('map');
        }
        return
    }

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.logIn(email.value, password.value);
        this.goToMap();
    };

    render() {
        return (
                <>    <h2>Логин</h2>
                    <div className="login">
                        <h2 className="login__title">Войти</h2>
                        <form className="login__form form" onSubmit={this.authenticate}>
                            <div className="form_wrap">
                                <div className="form__elem">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form__input" id="email" name="email" />
                                </div>
                                <div className="form__elem">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password" className="form__input" id="password" name="password" />
                                </div>
                            </div>
                            <button className="button button_theme--light">Забыли пароль?</button>
                            <button type ="submit" className="button button_theme--orange" id="login">Войти</button>
                            <div className="form__text-wrap">
                                <span className="form__text">Новый пользователь?</span>
                                <button className="button button_theme--light" onClick={() => { this.props.navigateTo('registration') }}>Регистрация</button>
                            </div>
                        </form>
                   </div>
                </> 
            )}
    }   

export const LoginWithAuth = withAuth(Login)