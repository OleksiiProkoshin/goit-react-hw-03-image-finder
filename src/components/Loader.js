import { Bars } from 'react-loader-spinner';

export const LoadingIndicator = () => {
  return (
    <div className="loader">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
