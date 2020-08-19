class Serv {
    constructor(){
        this._apiBase = 'https://api.openweathermap.org/data/2.5/weather?q=Kryvyi%20Rih&units=metric&appid=e9407330d1d49a3a8cbeab3758f9c960';
    }

    getData = async (url) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${url}&units=metric&appid=e9407330d1d49a3a8cbeab3758f9c960`);
        return await response.json();
    }

}
export default Serv;