import fs from 'fs';
import moment from 'moment';

const INITIAL_YEAR = 2023;

const replace = () => {
    fs.readFile('movies.txt', 'utf-8', (err, data) => {
        if (!err) {
            // make every line a new item in an array
            const lines = data.split('\n');
            // create an object including the date and title after spliting the values in new arrays
            const movies = lines.map((movie) => {
                const [date, title] = movie.split(' - ');
                return {
                    // scrapped data doesn't contain the year for the movie, for this reason it was setted a leap year to avoid "Invalid date" error
                    date: date + '/2024',
                    title
                }
            })
            // remove every line that have not generate either a title or a date
            const sanitized = movies.filter((movie) => (movie.title !== undefined && movie.date !== undefined));
            let year = INITIAL_YEAR;
            for (let i = 0; i < sanitized.length; i++) {
                const current = moment(sanitized[i].date, 'DD/MM/YYYY').year(year);
                sanitized[i].date = current.format('YYYY-MM-DD');
                // necessary to stop checking next item after it gets to the end of the array
                if(i < sanitized.length -1) {
                    const next = moment(sanitized[i + 1].date, 'DD/MM/YYYY').year(year);
                    // calculates the difference between the current day and next, because every year should be the same
                    // if any difference has more than 60 days, chances are that a new year in the list has started
                    // it ignores if the difference happens in the INITIAL_YEAR, once this year is probably not fuffiled yet
                    const diff = current.diff(next, 'days');
                    if (diff > 60 || (diff > 30 && year === INITIAL_YEAR)) {
                        year--;
                    }
                }
            }
            fs.writeFile('sanitized.json', JSON.stringify(sanitized), () => { });
        }
    })
}

replace();