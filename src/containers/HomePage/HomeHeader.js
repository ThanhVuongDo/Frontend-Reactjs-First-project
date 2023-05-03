import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/google-play-badge.svg';
import logo1 from '../../assets/app-store-badge-black.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }

    render() {
        let language = this.props.language;
        console.log('check language: ', language)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='title-first'><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <span className='sub-title'><FormattedMessage id="homeheader.searchdoctor" /></span>
                            </div>
                            <div className='child-content'>
                                <div className='title-first'><b><FormattedMessage id="homeheader.healthfacilities" /></b></div>
                                <span className='sub-title'><FormattedMessage id="homeheader.findhospital" /></span>
                            </div>
                            <div className='child-content'>
                                <div className='title-first'><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <span className='sub-title'><FormattedMessage id="homeheader.finddoctor" /></span>
                            </div>
                            <div className='child-content'>
                                <div className='title-first'><b><FormattedMessage id="homeheader.package" /></b></div>
                                <span className='sub-title'><FormattedMessage id="homeheader.healthcheck" /></span>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i> <FormattedMessage id="homeheader.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>

                </div>
                <div className='home-header-banner'>
                    <div className='header-up'>
                        <div className='home-header-content1'>
                            <FormattedMessage id="banner.medical" />
                        </div>
                        <div className='home-header-content1'>
                            <FormattedMessage id="banner.healthcare" />
                        </div>
                        <div className='header-search'>
                            <i className="fas fa-search"></i>
                            <input className='header-search-boder' placeholder='tìm kiếm thông tin' />
                        </div>
                        <div className='header-google-app'>
                            <img className='logo-google' src={logo} />
                            <img className='logo-apple' src={logo1} />
                        </div>

                    </div>
                    <div className='header-down'>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-hospital"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.specialized" /></div>
                        </div>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.remote" /></div>
                        </div>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-notes-medical"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.generalex" /></div>
                        </div>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-syringe"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.medicaltest" /></div>
                        </div>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-briefcase-medical"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.metal" /></div>
                        </div>
                        <div className='header-icon1'>
                            <div className='header-child-icon'><i className="fas fa-procedures"></i>
                            </div>
                            <div className='text-child'><FormattedMessage id="banner.dentalex" /></div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);