// Select the daily, weekly, and monthly elements
const daily = document.querySelector('li[data-frequency="daily"]');
const weekly = document.querySelector('li[data-frequency="weekly"]');
const monthly = document.querySelector('li[data-frequency="monthly"]');

// Fetch the JSON data from the file
fetch('./data.json')
  .then(response => response.json())
  .then(jsonData => {
    // Add event listeners to the daily, weekly, and monthly elements
    daily.addEventListener('click', () => {
      updateCardData(jsonData, 'daily'); // Update the card data with 'daily' timeframe
      setTextColor(daily); // Set the text color for the selected timeframe
    });

    weekly.addEventListener('click', () => {
      updateCardData(jsonData, 'weekly'); // Update the card data with 'weekly' timeframe
      setTextColor(weekly); // Set the text color for the selected timeframe
    });

    monthly.addEventListener('click', () => {
      updateCardData(jsonData, 'monthly'); // Update the card data with 'monthly' timeframe
      setTextColor(monthly); // Set the text color for the selected timeframe
    });
    
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Function to update the card data based on the selected timeframe
const updateCardData = (jsonData, timeframe) => {
  const cards = document.querySelectorAll('.card__body');

  cards.forEach((card, index) => {
    const title = card.querySelector('.card__job');
    const hours = card.querySelector('.card__time--hrs');
    const track = card.querySelector('.card__time--track');

    // Update the title and current hours based on the JSON data
    title.textContent = jsonData[index].title;
    hours.textContent = `${jsonData[index].timeframes[timeframe].current}hrs`;

    const previousHours = jsonData[index].timeframes[timeframe].previous;
    const timePeriod =
      timeframe === 'daily'
        ? 'Yesterday'
        : timeframe === 'weekly'
        ? 'Last Week'
        : timeframe === 'monthly'
        ? 'Last Month'
        : '';

    // Update the track text content based on the timeframe
    track.textContent = timePeriod
      ? `${timePeriod} - ${previousHours}hrs`
      : 'Select Time Tracking';
  });
};

// Function to set the text color for the selected timeframe
const setTextColor = selectedTimeframe => {
  const whiteColor = 'hsl(210, 40%, 98%)';

  // Loop through the daily, weekly, and monthly elements
  [daily, weekly, monthly].forEach(timeframe => {
    // Set the text color based on the selected timeframe
    timeframe.style.color = timeframe === selectedTimeframe ? whiteColor : '';
  });
};
