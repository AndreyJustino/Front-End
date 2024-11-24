import { LoadingInitial, LoaderInitial, Overlay } from './Loading.styles'
import Images from '../../assets/images.jsx'
import PropTypes from 'prop-types';
import { ClipLoader } from "react-spinners";

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

export const LoadingOverlay = ({ isLoadingOverlay }) => {
  if (!isLoadingOverlay) return null;

  return (
      <>
          <Overlay>
              <ClipLoader color="#ffffff" size={50} />
          </Overlay>
      </>
  );
};

LoadingComponentInitial.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

LoadingOverlay.propTypes = {
  isLoadingOverlay: PropTypes.bool.isRequired,
}

export default LoadingComponentInitial;
