import style from "./SeatsSelect.module.scss";

export const SeatsSelect = () => {
  return (
    <div className={style.seatsSelect}>
      <div className={style.display}>
        <i className="ic-display"></i>
        <span>Экран</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div key={`${i}-${Date.now()}`} className={style.row}>
                {i + 1}
              </div>
            ))}
        </div>
        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((item, i) => (
              <i key={`${i}-${Date.now()}`} className="ic-seat" />
            ))}
        </div>
      </div>
    </div>
  );
};
