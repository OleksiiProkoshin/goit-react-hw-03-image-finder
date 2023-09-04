export const Button = ({ onClick }) => {
    const handleClick = (e) => {
        e.preventDefault(); // Забороняємо стандартну дію браузера
        onClick();
      };

    return (
      <button type="button" className="Button" onClick={handleClick}>
        Load More
      </button>
    );
  };