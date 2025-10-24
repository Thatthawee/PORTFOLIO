// Data for concerts
const concerts = {
  'cocktail-classics': {
      title: 'Cocktail Classics',
      image: 'event_img/event1.png',
      description: 'Experience a magical evening of classical music and cocktails.',
      location: 'Thailand Cultural Centre',
      date: '19.08.2032',
      showtimes: ['19:00', '21:00'], // เวลาการแสดง
  },
  'tattoo-colour-fest': {
      title: 'Tattoo Colour Fest',
      image: 'event_img/event2.png',
      description: 'Join the fun and excitement at Tattoo Colour Fest!',
      location: 'Impact Arena',
      date: '04.02.2045',
      showtimes: ['18:00', '20:00'],
  },
  'nont-tanont-ep02': {
      title: 'Nont Tanont EP.02',
      image: 'event_img/event3.png',
      description: 'A thrilling performance by Nont Tanont you won\'t forget.',
      location: 'Impact Arena',
      date: '06.07.2089',
      showtimes: ['19:30', '21:30'],
  },
  'bornpink': {
      title: 'Born Pink World Tour',
      image: 'event_img/event4.png',
      description: 'Sing along with Blackpink. Lisa Jennie Rose and Jisoo are ready to fun with you!!!',
      location: 'Soul Stadium',
      date: '16.09.2030',
      showtimes: ['20:30'],
  },
  'youngohm': {
      title: 'Sound Frrom DEKWAT',
      image: 'event_img/event5.png',
      description: 'yo และนี้คือเสียงจากเด็กวัด',
      location: 'JJ Hall',
      date: '25.02.2050',
      showtimes: ['19:30'],
  },
  'younggu': {
      title: 'รวมพลคนมึน',
      image: 'event_img/event6.png',
      description: 'รู้พิกัด',
      location: 'Tutor Salaya',
      date: '27.09.2035',
      showtimes: ['21:30'],
  },
  'edsheeran': {
      title: 'Ed Sheeran UOB Live Grand Opening',
      image: 'event_img/event7.png',
      description: 'I found my heart and broke it here Made friends and lost them through the years And Ive not seen the roaring fields in so long, I know Ive grown But I cant wait to go home',
      location: 'UOB Live',
      date: '11.02.2034',
      showtimes: ['18:30'],
  },
  'rollingloud': {
      title: 'Rolling Loud',
      image: 'event_img/event8.png',
      description: 'Yo Whatsup this is the greatest HipHop Festival in the world!!!',
      location: 'Pattaya City',
      date: '22.11.2077',
      showtimes: ['17:30'],
  },
};

// Get the concert from the URL
const urlParams = new URLSearchParams(window.location.search);
const concertKey = urlParams.get('concert');

// Display concert details
if (concertKey && concerts[concertKey]) {
  const concert = concerts[concertKey];
  document.getElementById('concert-title').textContent = concert.title;
  document.getElementById('concert-image').src = concert.image;
  document.getElementById('concert-description').textContent = concert.description;
  document.getElementById('concert-location').textContent = concert.location;
  document.getElementById('concert-date').textContent = concert.date;

  // Display showtimes
  const showtimesContainer = document.getElementById('showtimes-list');
  concert.showtimes.forEach((time) => {
      const timeElement = document.createElement('div');
      timeElement.textContent = time;
      timeElement.classList.add('showtime-item');
      showtimesContainer.appendChild(timeElement);
  });
} else {
  document.getElementById('concert-detail').innerHTML = '<p>Concert not found.</p>';
}

// Example function for buying ticket
function buyTicket() {
  alert('Ticket purchased successfully!');
}
