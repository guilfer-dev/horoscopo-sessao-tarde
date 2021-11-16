import fs from 'fs';
import { Builder, By, Capabilities } from 'selenium-webdriver';

const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
const driver = new Builder().withCapabilities(caps).forBrowser('chrome').build();


var movies = fs.createWriteStream('movies.txt', { flags: 'a' });
(async function test() {

    await driver.get('https://tvglobo.fandom.com/pt-br/wiki/Lista_de_filmes_exibidos_na_Sess%C3%A3o_da_Tarde');
    try {

        let elements = await driver.findElements(By.css('ul li'));
        for (let e of elements) {

            movies.write(await e.getText() + '\n');
        }
    }
    catch (err) {

    }
    movies.end();

})();
