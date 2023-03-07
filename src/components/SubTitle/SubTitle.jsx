import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from 'react-reveal';

const SubTitle = ({ subTitle }) => {
  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h3 className="sub-section-title">{subTitle}</h3>
    </Fade>
  );
};

SubTitle.propTypes = {
  subTitle: PropTypes.string.isRequired,
};

export default SubTitle;
