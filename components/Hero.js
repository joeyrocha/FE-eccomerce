import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  height: 600px; /* Adjust as needed */
  color: white;
  z-index:-1;
`;

const ImageContainer = styled.div`
  background-image: url('./army2.jpg');
  background-size: cover;
  height: 100%; /* Ensure the image container takes up the full height */
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1; /* Ensure the text container is above the image */
`;

const HeroText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold; /* Make the font bold */
  background-image: linear-gradient(45deg, #4de296, #2897db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold; /* Make the font bold */
  background-image: linear-gradient(45deg, #4de296, #2897db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Hero = () => {
    return (
        <HeroContainer>
            <ImageContainer>
                <TextContainer>
                    <HeroText>Join the MOSSZILLA army!</HeroText>
                    <HeroSubtitle>Browse our products and join our MOSSZILLA community!</HeroSubtitle>
                </TextContainer>
            </ImageContainer>
        </HeroContainer>
    );
};

export default Hero;
