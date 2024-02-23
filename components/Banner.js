import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #ff0000; /* Red background */
  color: #ffffff; /* White font color */
  padding: 5px;
  text-align: center;
  
`;

const BannerText = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Banner = ({ text }) => {
  return (
    <BannerContainer>
      <BannerText>Free Shipping on Orders over $1,000! </BannerText>
    </BannerContainer>
  );
};

export default Banner;
