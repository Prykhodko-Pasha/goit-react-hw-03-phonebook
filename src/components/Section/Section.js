import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.section}>
      <h2 className={s.section__title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
