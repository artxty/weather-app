import PropTypes from "prop-types";

function Field({ title, value, unit }) {
  return (
    <div className="font-mono p-2 border-b">
      <span className="font-bold">{title}:</span> {value} {unit}
    </div>
  );
}

Field.defaultProps = {
  unit: "",
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
};

export default Field;
