import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a 20 years old React Js Developer who is ready to learn every single thing to be expert in this profession
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/qobiljon-rasuljonov-7092b5218/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
