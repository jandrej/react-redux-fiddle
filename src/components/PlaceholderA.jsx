import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { VISIBILITY_FILTERS } from '../features/filtersSlice';
import { invalidateApiData } from '../features/apiSlice';

const Button = styled.button``;

const PlaceholderA = ({ visibilityFilter, invalidate }) => (
  <>
    {visibilityFilter === VISIBILITY_FILTERS.SHOW_A ? (
      <Button onClick={() => invalidate()}>Invalidate API data</Button>
    ) : (
      <></>
    )}
  </>
);

PlaceholderA.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  invalidate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { invalidate: invalidateApiData };

export default connect(mapStateToProps, mapDispatchToProps)(PlaceholderA);
