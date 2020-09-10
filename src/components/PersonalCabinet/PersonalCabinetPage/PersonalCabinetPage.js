import React from 'react';
import Box from '../Box';
import LogoBox from '../LogoBox';
import Weather from '../Weather';
import Alert from '../Alert';
import Birthday from '../Birthday';
import BigBox from '../BigBox';
import HelloBox from '../HelloBox';
import Chat from '../Chat';
import Header from '../../Header/Header';

import './PersonalCabinetPage.css';

function PersonalCabinetPage(props) {
    
    return (
        <div className="personal-cabinet-page">
            <Header/>
            <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <HelloBox name={'Фаррух'}/>
                        <Chat/>
                        <BigBox text={"Галерея"} icon={"fa-images"} path={'gallery'}/>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-4 col-sm-12">
                        <div className="logo-box-section">
                            <LogoBox text={"Библиотека"} icon={"fa-book-open"} path={'library'}/>
                            <LogoBox text={"Расписание"} icon={"fa-table"} path={'schedale'}/>
                            <LogoBox text={"Вэбмэйл"} icon={"fa-envelope-open"} path={'webmail'}/>
                            <LogoBox text={"Дом задания"} icon={"fa-book"} path={'home-work'}/>
                            <LogoBox text={"Оценки"} icon={"fa-star"} path={'marks'}/>
                            <LogoBox text={"Конкурсы"} icon={"fa-medal"} path={'competitions'}/>
                            <BigBox text={"Объявления"} icon={"fa-bullhorn"} path={'announcement'}/>
                            <LogoBox text={"Стенгазета"} icon={"fa-newspaper"} path={'newspaper'}/>
                            <LogoBox text={"Праздники"} icon={"fa-birthday-cake"} path={'holidays'}/>
                            <LogoBox text={"Спорт"} icon={"fa-volleyball-ball"} path={'sport'}/>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                        <Weather/>
                        <Alert>
                            <Birthday name={'Фаррух'}/>
                            <Birthday name={'Джамшид'}/>
                        </Alert>
                        <div className="box-section">
                            <Box text={"Документы"} path={'documents'}/>
                            <Box text={"Регламент и правила"} path={'regulation-terms'}/>
                            <Box text={"Бухгалтерия"} path={'accounting'}/>
                            <Box text={"Посещаемость"} path={'attendance'}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PersonalCabinetPage
