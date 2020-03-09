import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { VISIBILITY_FILTERS } from '../features/filtersSlice';
import { fetchApiData } from '../features/apiSlice';

function PlaceholderB({ visibilityFilter, isValid, fetch }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isValid) {
      dispatch(fetch());
    }
  }, [isValid]);

  return (
    <>
      {visibilityFilter === VISIBILITY_FILTERS.SHOW_B ? (
        <>PlaceholderB</>
      ) : (
        <></>
      )}
    </>
  );
}

PlaceholderB.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter,
  isValid: state.api.isValid,
});

const mapDispatchToProps = {
  fetch: fetchApiData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceholderB);
