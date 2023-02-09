import style from './title.module.scss';

const Title1 = ({ text }) => {
	return <h1 className={style.title}>{text}</h1>;
};

export default Title1;
