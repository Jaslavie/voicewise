import PropTypes from 'prop-types';

function Tag({ text }) {

    return (
        <>
            <div className="icon-tag-contain">
                <p>{text}</p>
            </div>
        </>
    );
}

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tag;
