async function weatherApi(){
    const a = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1512569&lang=ru&appid=a2d6796e2f121b93c4989537aa32b6a6');
    return (a.json());
}

export {weatherApi};