"use strict";

class ExtendsDate extends Date {

    localDate() {
        return this.toLocaleDateString('ru', {
            weekday: 'long',
            month: 'long',
        }
        );
    }

    dateComparisons() {
        let date = new Date();
        if (this < date) {
            return false
        } else {
            true
        }
    }
    leapYearChek() {
        if (this.getFullYear() % 4 === 0) {

            console.log('Это высокосный год');
        } else {
            console.log('Это не высокосный год');
        }
    }
    nextDay() {

        return this.getDate() + 1;
    }


}

let thisDate = new ExtendsDate(2020, 10, 19);


class News {
    newsArrey = [];
    constructor() { }
    get getNews() {
        console.log(this.newsArrey.length);
    }
    setNews(news, date, teg) {
        let id = this.newsArrey.length + 1;
        let objNews = {
            news,
            date,
            teg,
            id,
        }
        this.newsArrey.push(objNews);
    }

    pripntNews() {
        this.newsArrey.forEach((e) => console.log(e));
    }

    deleteNews(idNews) {
        this.newsArrey.splice(idNews, 1);
    }
    sortNews() {
        this.newsArrey.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })
    }
    findNews(thisTeg) {
        this.newsArrey.findIndex((e) => {
            e.teg === thisTeg;
        })
    }

}

let friDay = new News();