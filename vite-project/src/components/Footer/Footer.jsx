import style from './Footer.module.css';

const Footer = (props) => {
  const { criador } = props;

  const anoAtual = new Date().getFullYear();


  return (
      <div className={style.Footer}>
        React Basico - {anoAtual} - {criador}
      </div>
  );
};

export { Footer };