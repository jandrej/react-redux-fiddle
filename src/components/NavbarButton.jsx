import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setVisibilityFilter } from '../features/filtersSlice';

const NavButton = styled.button``;

const NavbarButton = ({ label, showPanel, filter }) => (
  <NavButton onClick={() => filter(showPanel)}>{label}</NavButton>
);

NavbarButton.propTypes = {
  label: PropTypes.string.isRequired,
  showPanel: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default connect(null, {
  filter: setVisibilityFilter,
})(NavbarButton);
