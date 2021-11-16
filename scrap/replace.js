import fs from 'fs';

const replace = () => {

    fs.readFile('sanitized_wod.json', 'utf-8', (err, data) => {
        if (!err) {
            let year = 2021;
            let result = data.replaceAll('{PLACEHOLDER YEAR}', () => {
                const temp = year;
                year--;
                return `${temp}`;
            });
            fs.writeFile('sanitized.json', result, () => { });
        }
    })
}

replace();