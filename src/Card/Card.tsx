import "./Card.scss";
import { ICard } from "./Card.interface";

const Card = ({
  title,
  header,
  link,
  categories,
  featuredAlt,
  featuredImg,
  author,
  createdDate,
}: ICard) => {
  return (
    <div id={featuredAlt} className="p-card--highlighted">
      <h5 className="p-card__header">{header}</h5>
      <div className="p-card__content">
        <img className="p-card__image" alt={featuredAlt} src={featuredImg} />
        <h4>
          <a href={link} target="_blank">
            {title}
          </a>
        </h4>
        <i className="u-sv2">
          By{" "}
          <a href={author?.link} target="_blank">
            {author?.name}
          </a>{" "}
          on {createdDate}
        </i>
      </div>
      <footer className="p-card__footer sp-2">{categories}</footer>
    </div>
  );
};

export default Card;
