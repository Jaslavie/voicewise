import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
function Dropdown({ dropDownTitle, dropDownDescription, expandedText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="drop-down-contain" onClick={() => setExpanded(!expanded)}>
        <button>
            <div className="column">
               <h2>{dropDownTitle}</h2>
          <p>{dropDownDescription}</p> 
            </div>
          
          <button className={`expand-button ${expanded ? "expanded" : ""}`}>
            <p>
              {expanded ? (
                <span>
                  collapse
                  <FontAwesomeIcon icon={faArrowUp} />
                </span>
              ) : (
                <span>
                  expand
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              )}
            </p>
          </button>
        </button>
        {expanded ? <div className="drop-down-inner-contain">
            <p>{expandedText}</p>
        </div> : null}
      </div>
    </>
  );
}

Dropdown.propTypes = {
  dropDownTitle: PropTypes.string,
  dropDownDescription: PropTypes.string,
  expandedText: PropTypes.string,
};
export default Dropdown;
