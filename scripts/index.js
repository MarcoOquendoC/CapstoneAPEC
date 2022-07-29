// Script

const menuIcon = document.getElementsByClassName('toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const bars = document.getElementsByClassName('bar');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbar.classList.toggle('active');
  bars[0].classList.toggle('active');
  bars[1].classList.toggle('active');
  bars[2].classList.toggle('active');
});

const speakers = [{
  name: 'Alex Gerfer',
  picture: 'assets/images/speaker1.png',
  title: 'Space M: The Magnetics Universe & Challenges - APEC',
  info: 'Alex Gerfer, Würth Elektronik eiSos Group, Germany, presents his talk at the opening plenary session from APEC 2022 in Houston, Texas.',
},
{
  name: 'John H. Scott',
  picture: 'assets/images/speaker2.png',
  title: 'On the Moon to Stay: Power Electronics Technology Challenges on the Lunar Surface - APEC',
  info: 'NASA Space Technology Mission Directorate. The challenges facing power electronics when sustaining life on the surface of the moon.',
},
{
  name: 'Jelena Popovic & Liuchen Chang',
  picture: 'assets/images/speaker3.png',
  title: 'Energy Access: Challenges, Opportunities, & our Contributions',
  info: 'Together, co-presenters discuss topics related to the challenges of accessing energy resources around the world. Popovic and Chang present the IEEE-PELS initiative, IEEE Empower a Billion Lives.',
},
{
  name: 'Gideon van Zyl',
  picture: 'assets/images/speaker4.png',
  title: 'Driving Plasma: Advancing Power Conversion in Critical Semi & Medical Applications - APEC',
  info: 'Gideon (Don) van Zyl, Advanced Energy Industry, Fort Collins, CO, USA, presents his plenary talk about plasma processing, its power electronics engineering challenges, and its semiconductor industry role.',
},
{
  name: 'Ritu Sodhi',
  picture: 'assets/images/speaker5.png',
  title: 'History of PSMA Power Technology Roadmap: from AAA TripTik® to Google Maps® - APEC',
  info: 'Dr. Ritu Sodhi, Power Transistor R&D Consult to ROHM, presents her plenary talk on making their roadmap more interactive, live real-time, and contextual while staying relevant to its users.',
},
{
  name: 'Deepak Divan',
  picture: 'assets/images/speaker6.png',
  title: 'Inverters for the Future Grid: Challenges & Opportunities - APEC',
  info: 'Dr. Deepakraj (Deepak) Divan, Georgia Institute of Technology, presents the closing plenary talk on distributed energy and how to create solutions that use science and technology to achieve impact.',
}];

const container = document.getElementById('speakers');

speakers.forEach((speaker, index) => {
  const article = document.createElement('article');
  article.classList.add('speaker');

  const picture = document.createElement('img');
  picture.classList.add('picture');
  picture.setAttribute('src', speaker.picture);
  picture.setAttribute('alt', `${speaker.name} picture`);
  article.appendChild(picture);

  const div = document.createElement('div');
  div.classList.add('text-containter');
  article.appendChild(div);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = speaker.name;
  div.appendChild(name);

  const title = document.createElement('h4');
  title.classList.add('title');
  title.textContent = speaker.title;
  div.appendChild(title);

  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = speaker.info;
  div.appendChild(info);

  container.appendChild(article);
});
