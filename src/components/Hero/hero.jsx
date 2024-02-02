import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles.heroWrapper2}>
        <div className={styles.hero_text}>
          <h2 className={styles.titulo}>Bem-vindo ao PlayIn!</h2>
          <h3 className={styles.txt1}>
            Ouça sem limites. Experimente 1 mês de Premium Individual grátis.
            Depois, apenas R$ 21,90/mês. Cancele quando quiser.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
