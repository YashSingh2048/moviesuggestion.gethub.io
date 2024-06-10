

const movies = {
    happy: [
        { title: 'Yeh Jawaani Hai Deewani', genre: 'Romance', year: '2013', image: 'm1.jfif' },
                { title: 'Chhichhore', genre: 'Comedy', year: '2019', image: 'm2.jfif' },
                { title: 'Dil Chahta Hai', genre: 'Drama', year: '2001', image: 'm3.jfif' },
                { title: 'Ludo', genre: 'Dark Comedy', year: '2020', image: 'M17.jpg' },
                { title: 'Dream Girl 2', genre: 'Comedy', year: '2023', image: 'M16.jpg' },
                { title: 'Bhool Bhulaiyaa 2', genre: 'Horror,Comedy', year: '2022', image: 'M18.jpg' },
                { title: 'Vijay Superum Pornamiyum', genre: 'Romantic Comedy', year: '2019', image: 'M19.jpg' },
                { title: 'sarileru Neekevvaru', genre: 'Comedy,Action', year: '2020', image: 'M20.jpg' },
                { title: 'Pati Pati Aur Woh', genre: 'Comedy,Romance', year: '2019', image: 'M21.jpg' },
                { title: 'Badhaai Do', genre: 'Comedy,Drama', year: '2022', image: 'M22.jpg' },
                { title: 'Dream Girl', genre: 'Comedy,Romance', year: '2019', image: 'M23.jpg' },
                { title: 'BlackOut', genre: 'Comedy', year: '2024', image: 'M24.jpg' },
        // Add more happy movies here
    ],
    sad: [
        { title: 'Kabhi Alvida Naa Kehna', genre: 'Drama', year: '2006', image: 'M4.jpg' },
        { title: 'Kal Ho Naa Ho', genre: 'Romance', year: '2003', image: 'M15.jpg' },
        { title: 'Sardar Udham', genre: 'Biographical Drama', year: '2021', image: 'M25.jpg' },
        { title: 'Taare Zameen Par', genre: 'Drama', year: '2007', image: 'M5.jpg' },
        { title: 'Dil Bechara', genre: 'Romance,Drama', year: '2020', image: 'M26.jpg' },
        { title: 'Shershaah', genre: 'Biographical,War', year: '2021', image: 'M27.jpg' },
        { title: 'Jersey', genre: 'Sport Drama', year: '2022', image: 'M28.jpg' },
        { title: 'Sufiyam Sujatayum', genre: 'Romance ,Drama', year: '2020', image: 'M29.jpg' },
        { title: 'The Sky Is Pink', genre: 'Biographical,Drama', year: '2019', image: 'M30.jpg' },
        { title: 'Raatchasi', genre: 'Drama', year: '2019', image: 'M31.jpg' },
        { title: 'Mimi', genre: 'Comedy,Drama', year: '2021', image: 'M32.jpg' },
        { title: 'Ponniyin Selvan:Part 1', genre: 'Historical Drama', year: '2022', image: 'M33.jpg' },
        // Add more sad movies here
    ],
    excited: [
        { title: 'Gully Boy', genre: 'Drama', year: '2019', image: 'M6.jpg' },
        { title: 'Dhoom', genre: 'Action', year: '2004', image: 'M7.jpg' },
        { title: 'Dil Dhadakne Do', genre: 'Drama', year: '2015', image: 'M8.jpg' },
        { title: 'RRR', genre: 'Action,Drama', year: '2022', image: 'M34.jpg' },
        { title: 'Pathan', genre: 'Action,Thriller', year: '2023', image: 'M35.jpg' },
        { title: 'Sooryavanshi', genre: 'Action', year: '2021', image: 'M36.jpg' },
        { title: 'Pushpa:The Rise', genre: 'Action,Drama', year: '2021', image: 'M37.jpg' },
        { title: 'Master', genre: 'Action,Thriller', year: '2021', image: 'M38.jpg' },
        { title: 'Baaghi 3', genre: 'Action,Thriller', year: '2020', image: 'M39.jpg' },
        { title: 'Saaho', genre: 'Action,Thriller', year: '2019', image: 'M40.jpg' },
        { title: 'KGF:Chapter 2', genre: 'Action,Drama', year: '2022', image: 'M41.jpg' },
        { title: 'War', genre: 'Action,Thriller', year: '2019', image: 'M42.jpg' },
        // Add more excited movies here
    ],
    romantic: [
        { title: 'Dilwale Dulhania Le Jayenge', genre: 'Romance', year: '1995', image: 'M9.jpg' },
        { title: 'Jab We Met', genre: 'Romance', year: '2007', image: 'M10.jpg' },
        { title: 'Kabir Singh', genre: 'Romance', year: '2019', image: 'M11.jpg' },
        { title: 'Shiddat', genre: 'Romance,Drama', year: '2021', image: 'M43.jpg' },
        { title: 'Radhe Shyam', genre: 'Romance,Drama', year: '2022', image: 'M44.jpg' },
        { title: 'Chandigarh Kare Aashiqui', genre: 'Romance,Comedy', year: '2021', image: 'M45.jpg' },
        { title: 'Love Aaj Kal', genre: 'Romance,Drama', year: '2020', image: 'M46.jpg' },
        { title: 'Sita Ramam', genre: 'Romance,Drama', year: '2022', image: 'M47.jpg' },
        { title: 'Gehraiyaan', genre: 'Romance,Drama', year: '2022', image: 'M48.jpg' },
        { title: 'Atrangi Re', genre: 'Romance,Drama', year: '2021', image: 'M49.jpg' },
        { title: '96', genre: 'Romance,Drama', year: '2019', image: 'M50.jpg' },
        { title: 'Malang', genre: 'Romance,Thriller', year: '2020', image: 'M51.jpg' },
        // Add more romantic movies here
    ],
    thriller: [
        
        { title: 'Don', genre: 'Action', year: '2006', image: 'M12.jpg' },
        { title: 'Race', genre: 'Thriller', year: '2008', image: 'M13.jpg' },
        { title: 'Dhoom 2', genre: 'Action', year: '2006', image: 'M14.jpg' },
        { title: 'Vikram', genre: 'Action,Thriller', year: '2022', image: 'M52.jpg' },
        { title: 'Drishyam 2', genre: 'Thriller,Drama', year: '2022', image: 'M53.jpg' },
        { title: 'Tumbbad', genre: 'Horror,Thriller', year: '2018', image: 'M54.jpg' },
        { title: 'Andhadhun', genre: 'Thriller,Black Comedy', year: '2018', image: 'M55.jpg' },
        { title: 'Forensic', genre: 'Thriller,Mystery', year: '2022', image: 'M56.jpg' },
        { title: 'Vikram Vedha', genre: 'Action,Thriller', year: '2022', image: 'M57.jpg' },
        { title: 'Mumbai Saga', genre: 'Action,Crime', year: '2021', image: 'M58.jpg' },
        { title: 'Gaslight', genre: 'Thriller,Drama', year: '2023', image: 'M59.jpg' },
        { title: 'Bhoot Police', genre: 'Horror,Comedy', year: '2021', image: 'M60.jpg' },
        { title: 'Hit:The first Case', genre: 'Thriller,crime', year: '2020', image: 'M61.jpg' },
        { title: 'Evaru', genre: 'Thriller', year: '2019', image: 'M62.jpg' },
        { title: 'Bulbbul', genre: 'Horror,Drama', year: '2020', image: 'M63.jpg' },
        // Add more thriller movies here
    ],
    series: [
        { title: 'Panchayat', genre: 'Comedy,Drama', year: '2020', image: 'M79.jpg' },
        { title: 'Gullak', genre: 'Comedy,Slice of life', year: '2019', image: 'M80.jpg' },
        { title: 'TVF Pitchers ' , genre: 'Comedy,Drama', year: '2015', image: 'M91.jpg' },
        { title: 'KOta Factory', genre: ',Drama', year: '2019', image: 'M92.jpg' },
        { title: 'Little Things', genre: 'Romance,Drama', year: '2016', image: 'M93.jpg' },
        { title: 'Tripling', genre: 'Comedy,Drama', year: '2016', image: 'M94.jpg' },
        { title: 'Yeh Meri Family', genre: 'Comedy,Drama', year: '2018', image: 'M95.jpg' },
        
        
        { title: 'The Dark Knight', genre: 'Crime,Drama,Action', year: '2008', image: 'M85.jpg' },
        
        { title: 'Avatar', genre: 'Science Fiction,Action,Adventure', year: '2009', image: 'M83.jpg' },
        
        { title: 'Inception', genre: 'Science Fiction,Action,Thriller', year: '2010', image: 'M82.jpg' },
        
        { title: 'The Loard of the things:The Fellowship of the Ring', genre: 'Fantasy,Adventure', year: '2001', image: 'M81.jpg' },
        
        { title: 'Interstellar', genre: 'Science Fiction,Action', year: '2014', image: 'M84.jpg' },

    ],
    magic: [
        { title: 'Hanuman', genre: 'Adventure,Action,Fantasy', year: '2024', image: 'M70.jpg' },
        { title: 'Brahmaster:Part 1-Shiva', genre: 'Adventure,Fantasy', year: '2022', image: 'M72.jpg' },
        { title: 'Docter Sterange in the Multiverse of MAdeness', genre: 'Adventure,Action,Fantasy', year: '2022', image: 'M73.jpg' },
        { title: 'Fantastic Beasts:The Secrets of Dumbledore', genre: 'Adventure,Fantasy', year: '2022', image: 'M74.jpg' },
        { title: 'Thore:LOve&Thunder', genre: 'SuperHero,Action,Fantasy', year: '2022', image: 'M75.jpg' },
        { title: 'The School for Good and Evil', genre: 'Adventure,Fantasy', year: '2022', image: 'M76.jpg' },
        { title: 'The Kings Man', genre: 'Adventure,Action,Fantasy', year: '2021', image: 'M77.jpg' },
        { title: 'Kalki 2898', genre: 'SCI-FI,Fantasy', year: '2024', image: 'M78.jpg' },
        { title: 'Harry Potter', genre: 'Adventure,Fantasy', year: '2000-2011', image: 'M71.jpg' },
        
    ]
    // Add more mood categories with movie arrays
};

function suggestMovies() {
    const mood = document.getElementById('mood-select').value;
    const suggestions = movies[mood];
    const suggestionsDiv = document.getElementById('movie-suggestions');

    suggestionsDiv.innerHTML = '';
    suggestions.slice(0, 15).forEach(movie => { // Limit to 12 movies
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieImg = document.createElement('img');
        movieImg.src = movie.image;
        movieDiv.appendChild(movieImg);

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.innerText = movie.title;
        movieDiv.appendChild(movieTitle);

        const movieDetails = document.createElement('div');
        movieDetails.classList.add('movie-details');
        movieDetails.innerText = `${movie.genre} - ${movie.year}`;
        movieDiv.appendChild(movieDetails);

        suggestionsDiv.appendChild(movieDiv);
    });
}

  
