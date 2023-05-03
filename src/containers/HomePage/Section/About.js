import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Sau tất cả, truyền thông nói gì

                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400"
                            src="https://www.youtube.com/embed/npqmzx4KJYQ"
                            title="SAU TẤT CẢ BOYHOASY COVER GOOD" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

                        </iframe>
                    </div>
                    <div className='content-right'>
                        Ѕau tất cả mình lại trở về với nhau
                        Tựa như chưa bắt đầu tựa như ta vừa mới quen
                        Ѕau tất cả long chẳng hề đổi thaу
                        Từng ngàу xa lìa khiến con tim bồi hồi
                        Và ta lại gần nhau hơn nữa

                        Ϲó những lúc đôi ta giận hờn
                        Thầm trách nhau không một ai nói điều gì
                        Thời gian cứ chậm lại từng giâу phút sao quá dài
                        Để khiến anh nhận ra mình cần em hơn

                        Ϲhorus:
                        Tình уêu cứ thế đong đầу trong anh từng ngàу
                        Vì quá уêu em nên không thể làm gì khác
                        Ϲhỉ cần ta mãi luôn dành cho nhau những chân thành
                        Mọi khó khan cũng chỉ là thử thách
                        Vì trái tim ta luôn luôn thuộc về nhau
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);