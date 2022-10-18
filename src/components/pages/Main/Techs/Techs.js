import './Techs.css';

function Techs() {
  return (
    <section className="Techs">
      <h2 className="Techs__title">Технологии</h2>
      <div className="Techs__content">
        <h3 className="Techs__seven-title">7 технологий</h3>
        <p className="Techs__seven-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="Techs__seven-table">
          <span className="Techs__seven-item">HTML</span>
          <span className="Techs__seven-item">CSS</span>
          <span className="Techs__seven-item">JS</span>
          <span className="Techs__seven-item">React</span>
          <span className="Techs__seven-item">Git</span>
          <span className="Techs__seven-item">Express.js</span>
          <span className="Techs__seven-item">mongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Techs;
