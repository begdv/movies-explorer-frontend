import './AboutProject.css';

function AboutProject() {
  return (
    <section className="AboutProject">
      <h2 className="AboutProject__title">О проекте</h2>
      <div className="AboutProject__descrition">
        <span className="AboutProject__stage">
          Дипломный проект включал 5 этапов
        </span>
        <span className="AboutProject__stage-description">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </span>
        <span className="AboutProject__stage">
          На выполнение диплома ушло 5 недель
        </span>
        <span className="AboutProject__stage-description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </span>
      </div>
      <div className="AboutProject__timeline"  id="part1">
        <span className="AboutProject__timeline-backend">
          1 неделя
        </span>
        <span className="AboutProject__timeline-frontend">
          4 недели
        </span>
        <span className="AboutProject__timeline-description">
          Back-end
        </span>
        <span className="AboutProject__timeline-description">
          Front-end
        </span>
      </div>
    </section>
  );
}

export default AboutProject;