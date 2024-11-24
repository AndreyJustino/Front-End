import { LoadingInitial, LoaderInitial } from './Loading.styles'
import Images from '../../assets/images.jsx'
import PropTypes from 'prop-types';

export const LoadingComponentInitial = ({ isLoading }) => {
    return (
        <>
      {isLoading && (
        <LoadingInitial>
          <LoaderInitial src={Images.Logo} alt="Carregando" />
        </LoadingInitial>
      )}
    </>
  );
};

LoadingComponentInitial.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default LoadingComponentInitial;
