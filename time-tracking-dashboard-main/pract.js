const daily = document.querySelector('li[data-frequency="daily"]')
const weekly = document.querySelector('li[data-frequency="weekly"]')
const monthly = document.querySelector('li[data-frequency="monthly"]')

// fetch('./data.json').then(response => response.json()).then(jsonData => {
//     console.log(jsonData);
// })
fetch('./data.json').then(response => response.json()).then(jsonData => {
    console.log(jsonData);

    daily.addEventListener('click', () => {
        updateCardData(jsonData, 'daily');
        setTextColor(daily)
    })
    weekly.addEventListener('click', () => {
        updateCardData(jsonData, 'weekly');
        setTextColor(weekly)
    })
    
    monthly.addEventListener('click', () => {
        updateCardData(jsonData, 'monthly');
        setTextColor(monthly)
    })

}).catch(error => {
    console.log('Error:', error);
})

const updateCardData = (jsonData, timeframe) => {
    const cards = document.querySelectorAll('.card__body');

    cards.forEach((card, index) => {
        const title = card.querySelector('.card__job');
        const hours = card.querySelector('.card__time--hrs');
        const track = card.querySelector('.card__time--track');
  

    title.textContent = jsonData[index].title;
    hours.textContent = `${jsonData[index].timeframes[timeframe].current}hrs`;

    const previousHours = jsonData[index].timeframe[timeframe].previous;

    const timePeriod = 
        timeframe === 'daily'
        ? 'Yesterday'
        : timeframe === 'weekly'
        ? 'Last Week'
        : timeframe === 'monthly'
        ? 'Last Month'
        : '';

         track.textContent = timePeriod
        ? `${timePeriod} -  ${previousHours}hrs`
        : 'Select Time Tracking';    

    })    
}

const setTextColor = selectedTimeframe => {

    const whiteColor = 'hsl(210, 40%, 98%)';
    [daily, weekly, monthly].forEach(timeframe => {
        timeframe.style.color = timeframe === selectedTimeframe ? whiteColor : '';
    })

}



