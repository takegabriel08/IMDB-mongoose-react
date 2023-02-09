import '../App.css'
import noImg from '../assets/unavailable.png'
import play from '../assets/play.svg'
import star from '../assets/star.svg'

export default function List(props) {
    console.log('list', props)
    const movieElements = props.movieArr.map((el, idx) => {
        el = el?.node
        const { day, month, year } = el.releaseDate
        return (
            <div
                key={el?.id || idx}
                className="movie-container"
                style={{ display: "inline-flex", flexDirection: "column", minHeight: "500px", width: "150px", backgroundColor: "green", margin: "1em" }}
            >
                <h2 className="movie-title">{el.titleText.text}</h2>
                <div className="image-container">
                    <img className='movie-image' src={el?.primaryImage?.url || noImg} />
                </div>
                <div className="movie-details">
                    <p>❤️</p>
                    <div className='movie-star' style={{ height: "20px", fontSize: "14px" }}>
                        <img src={star} style={{ height: "100%", width: "auto" }} />
                        Current rank: {el?.meterRanking?.currentRank || "none"}
                    </div>
                    <p style={{ fontSize: "0.8em" }}>Release: {`${day}-${month}-${year}`}</p>
                    <a href={el?.latestTrailer?.thumbnail?.url} className="movie-trailer" >
                        <img src={play} style={{ height: "0.8em", marginRight: "3px" }} />
                        Play trailer
                    </a>
                </div>
            </div>
        )
    })
    return (
        <main className='List'>
            <div id="listContainer">
                {movieElements}
            </div>
        </main>
    )
}