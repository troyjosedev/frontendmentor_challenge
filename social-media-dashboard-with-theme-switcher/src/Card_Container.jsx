
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg"
import instagramIcon from "./assets/images/icon-instagram.svg"
import youtubeIcon from "./assets/images/icon-youtube.svg"
import iconUp from "./assets/images/icon-up.svg"
import iconDown from "./assets/images/icon-down.svg"


const LargeCard = ({ imgSrc, user, num, fans, today, arrow, className, isDarkMode }) => {
  return (
    <div className={`card--big ${className} ${isDarkMode ? 'dark-mode' : ''}`}>
      <p className="card--big-icon"><img src={imgSrc} alt={user} /> {user}</p>
      <h2 className="card--big-num" style={{ color: isDarkMode ? "hsl(0, 0%, 100%)" : "" }}>{num}</h2>
      <p className="card--big-fans">{fans}</p>
      <div className="flex-arrow">
        <img src={arrow} alt="arrow" />
        <p className="card--big-today ">{today} Today</p>
      </div>
    </div>
  );
};

const LargeCardContainer = ({ isDarkMode }) => {
  return (
    <div className="card--container">
      <LargeCard
        className="facebook"
        imgSrc={facebookIcon}
        user="@nathanf"
        num="1987"
        fans="followers"
        arrow={iconUp}
        today="12"
        isDarkMode={isDarkMode}
      />
      <LargeCard
        className="twitter"
        imgSrc={twitterIcon}
        user="@nathanf"
        num="1044"
        fans="followers"
        arrow={iconUp}
        today="99"
        isDarkMode={isDarkMode}
      />
      <LargeCard
        className="instagram"
        imgSrc={instagramIcon}
        user="@nathanf"
        num="11k"
        fans="followers"
        arrow={iconUp}
        today="1099"
        isDarkMode={isDarkMode}
      />
      <LargeCard
        className="youtube"
        imgSrc={youtubeIcon}
        user="Nathan F."
        num="8239"
        fans="subscribers"
        arrow={iconDown}
        today="144"
        isDarkMode={isDarkMode}
      />
    </div>
  );
};


const Overview = ({isDarkMode}) => <h2 className="overview" style={{ color: isDarkMode ? "hsl(0, 0%, 100%)" : "" }} >Overview - Today</h2>

const SmallCard = ({ metrics, num, imgSrc, percent, arrow, className, isDarkMode }) => {
  return (
    <div className={`card--small ${isDarkMode ? 'dark-mode' : ''}`}>
      <div>
        <h4 className="card--small-metrics">{metrics}</h4>
        <h3 className="card--small-num" style={{ color: isDarkMode ? "hsl(0, 0%, 100%)" : "" }}>{num}</h3>
      </div>
      <div>
        <img className="card--small-icon" alt={metrics} src={imgSrc} />
        <p className={`card--small-percent ${className}`}><img src={arrow} alt="arrow" />{percent}%</p>
      </div>
    </div>
  );
};

const SmallCardContainer = ({isDarkMode}) => {
  return (
   <div className="card--container-sm">
     <SmallCard
    metrics="Page Views"
    num="87"
    imgSrc={facebookIcon}
    arrow={iconUp}
    percent="3"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    className="arrow-down"
    metrics="Likes"
    num="52"
    imgSrc={facebookIcon}
    arrow={iconDown}
    percent="2"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    metrics="Likes"
    num="5462"
    imgSrc={instagramIcon}
    arrow={iconUp}
    percent="2257"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    metrics="Profile Views"
    num="52k"
    imgSrc={instagramIcon}
    arrow={iconUp}
    percent="1375"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    metrics="Retweets"
    num="117"
    imgSrc={twitterIcon}
    arrow={iconUp}
    percent="303"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    metrics="Likes"
    num="507"
    imgSrc={twitterIcon}
    arrow={iconUp}
    percent="553"
    isDarkMode={isDarkMode}

    />
    <SmallCard
    className="arrow-down"
    metrics="Likes"
    num="107"
    imgSrc={youtubeIcon}
    arrow={iconDown}
    percent="19"
    isDarkMode={isDarkMode}
    />
    <SmallCard
    className="arrow-down"
    metrics="Total Views"
    num="1407"
    imgSrc={youtubeIcon}
    arrow={iconDown}
    percent="12"
    isDarkMode={isDarkMode}
    />
   </div>
  )
}

export default function Main({isDarkMode}) {
  return (
    <>
      <LargeCardContainer  isDarkMode={isDarkMode} />
      <Overview  isDarkMode={isDarkMode} />
      <SmallCardContainer isDarkMode={isDarkMode}/>
    </>
  );
}
