import styled from 'styled-components';
import logoBranca from '../../assets/img/logoBranca.png'; 
import facebook from '../../assets/icon/facebook.png';
import instagram from '../../assets/icon/instagram.png';
import linkedin from '../../assets/icon/linkedin.png';
import youtube from '../../assets/icon/youtube.png';
import tiktok from '../../assets/icon/tiktok.png';



const StyledFooter = styled.footer`
  background-color: #519AFF;
  padding: 20px 0;
  color: white;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 15px;
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


