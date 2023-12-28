
import PropTypes from 'prop-types';

function Icontag ({icon, text} ) {
    return(
        <>
            <div className="icon-tag-contain">
                <div className="icon">{icon}</div>
                <p>{text}</p>
            </div>
        </>
    )
}

Icontag.propTypes = {
    icon: PropTypes.element.isRequired, // Assuming icon is a React element
    text: PropTypes.string.isRequired,
  };

export default Icontag
