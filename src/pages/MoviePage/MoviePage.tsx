import { Title } from '../../components/Title'
import style from './MoviePage.module.scss'

export const MoviePage=()=>{
    return(
        <div className={style.moviePage}>
            <Title center></Title>
        </div>
    )
}