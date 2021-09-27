import react from 'react';
import styled from 'styled-components';
import styless from './css/Banner.module.css';


const BgBanner = styled.div`
background-size: cover;
padding: 200px 0;

`;
const TextBanner = styled.div`
  color: #333;
  font-size: 20px;
  padding: 20px;
  max-width: 500px;
  background: rgb(255, 255, 255, 0.6);
`;

const Banner = () => {
  return (
    <BgBanner>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <TextBanner>Create React App —лучший путь, с которого начинается построение нового одностраничного приложения на React.  </TextBanner>
          </div>
        </div>
      </div>

    </BgBanner>

  );
}
export default Banner;