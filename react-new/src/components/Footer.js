import react from "react";
import styled from "styled-components";

const FooterMain = styled.footer`
    background: #00c9ff;
    padding: 10px 0;
`;
const MainText = styled.text`
.text-footer{
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer; 
    line-height: 9px; 
    transition: 0.3s; 
    width: 100%;
    height: 150px
    padding: 50px 0;
    

   
}
.text-footer:hover{
    text-decoration: underline;
}
`;
const Footer = () => {
    return (
        <FooterMain>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <MainText>
                            <div class="text-footer">
                                <p>Срочную доставку осуществляет Новая Почта.</p>
                                <p>Доставка оплачивается по тарифам Новой почты при получении</p>
                            </div>
                        </MainText>
                    </div>
                </div>
            </div>
        </FooterMain>
    );
}
export default Footer;