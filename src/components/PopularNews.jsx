import PopularNewsStyles from '../scss/components/PopularNews.module.scss';
import retroPC from '../assets/images/image-retro-pcs.jpg';
import topLaptops from '../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../assets/images/image-gaming-growth.jpg';

function PopularArticle(props) {
  return (
    <section className={PopularNewsStyles.PopularArticle}>
      <img src={props.image} alt={props.alt} />
      <div className={PopularNewsStyles.ArticleContent}>
        <h3 className={PopularNewsStyles.Number}>0{props.number}</h3>
        <a href='/' className={PopularNewsStyles.Title}>
          {props.title}
        </a>
        <p className={PopularNewsStyles.NewContent}>{props.content}</p>
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

export { PopularNews };
