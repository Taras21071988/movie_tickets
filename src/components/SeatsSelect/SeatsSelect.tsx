import style from './SeatsSelect.module.scss'

export const SeatsSelect=()=>{
    return(
        <div className={style.seatsSelect}>
            <div className={style.display}>
                <i className="ic-display"></i>
                <span>Экран</span>
            </div>
            <i className="ic-seat"></i>
        </div>
    )
}