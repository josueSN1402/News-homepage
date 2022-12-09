import PopularNewsStyles from '../scss/components/PopularNews.module.scss';
import retroPC from '../assets/images/image-retro-pcs.webp';
import topLaptops from '../assets/images/image-top-laptops.webp';
import gamingGrowth from '../assets/images/image-gaming-growth.webp';

function PopularArticle(props) {
  return (
    <section className={PopularNewsStyles.PopularArticle}>
      <img
        src={props.image}
        alt={props.alt}
        width='100'
        height='127'
        loading='lazy'
      />
      <div className={PopularNewsStyles.ArticleContent}>
        <h3 className={PopularNewsStyles.Number}>0{props.number}</h3>
        <a href='/' className={PopularNewsStyles.Title}>
          {props.title}
        </a>
        <a href='/' className={PopularNewsStyles.NewContent} tabIndex={0}>
          {props.content}
        </a>
      </div>
    </section>
  );
}

function PopularNews() {
  return (
    <section className={PopularNewsStyles.PopularsContainer}>
      <PopularArticle
        image={retroPC}
        alt='Retro PCs'
        number={1}
        title='Reviving Retro PCs'
        content='What happens when old PCs are given modern upgrades?'
      />
      <PopularArticle
        image={topLaptops}
        alt='Top laptops'
        number={2}
        title='Top 10 Laptops of 2022'
        content='Out best picks for various needs and budgets.'
      />
      <PopularArticle
        image={gamingGrowth}
        alt='Gaming growth'
        number={3}
        title='The Growth of Gaming'
        content='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  );
}

export default PopularNews;
