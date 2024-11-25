import styled from 'styled-components';
import logoBranca from '../../assets/img/logoBranca.png'; 
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import youtube from '../../assets/images/youtube.png';
import tiktok from '../../assets/images/tiktok.png';

const StyledFooter = styled.footer`
  background-color: #519AFF;
  padding: 20px 0;
  height: 400px;
  color: white;
  border: red solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  /* border: red solid; */
  margin: 0 auto;

   @media (max-width: 768px) {
    flex-wrap: wrap; 
    justify-content: center; 
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px; 
    text-align: center; 
    padding: 0 10px;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center; 
  }
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px; 
  height: 48px;
  background-color: transparent;
  border: 2px solid white; 
  border-radius: 8px; 
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s;
  text-decoration: none;

  &:hover {
    background-color: white;
    transform: scale(1.1); 
    border-color: #519aff;
  }

  img {
    width: 24px; 
    height: 24px;
  }

  &:focus {
    outline: 2px solid #519aff;
    outline-offset: 4px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 20px; 
  }
`;

export  const Footer = () => {
 
  return (
    <StyledFooter>
      <FooterBox>
        <FooterSection>
          <Logo src={logoBranca} alt="Logo Onfly" />
          <SocialIconsWrapper>
            <SocialIconLink href="https://www.facebook.com/onfly.travel" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/onfly.travel/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/company/onfly/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></SocialIconLink>
            <SocialIconLink href="https://www.youtube.com/@onfly.travel" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@onfly.travel" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="TikTok" /></SocialIconLink>
          </SocialIconsWrapper>
        </FooterSection>
        <FooterSection>
          <h6>Institucional</h6>
          <p>Institucional </p>
          <p>Trabalhe conosco</p>          
        </FooterSection>
        <FooterSection>
          <h6>Escritórios</h6>
          <p>Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê...</p>
        </FooterSection>
        <FooterSection>
          <h6>Suporte</h6>
          <p>Institucional institucional</p>
        </FooterSection>
      </FooterBox>
      <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
        <p style={{ fontSize: '14px' }}>
          Copyright © 2024 Onfly. Feito com muito ❤️ e carinho no San Pedro Valley
        </p>
      </div>
    </StyledFooter>
  );
};


