export type IntervalSliders = {
    sort: number;
    name: string;
    interval: {
        start: number;
        end: number;
    };
    slides: {
        name: string;
        description: string;
    }[];
}[]

export const data = [
    {
        'sort': 0,
        'name': 'Кино СССР',
        'interval': {
            'start': 1960,
            'end': 1977,
        },
        'slides': [
            {
                'name': '1960',
                'description': 'Начало десятилетия, закладываются основы жанров.',
            },
            {
                'name': '1963',
                'description': 'Пик популярности фильмов Леонида Гайдая.',
            },
            {
                'name': '1966',
                'description': 'Появление новых режиссёров и актеров.',
            },
            {
                'name': '1970',
                'description': 'Фильмы Андрея Тарковского, влияние на мировое кино.',
            },
            {
                'name': '1974',
                'description': 'Завершение периода расцвета советского кино.',
            },

        ]
    },
    {
        'sort': 1,
        'name': 'Рок-музыка',
        'interval': {
            'start': 1970,
            'end': 1979,
        },
        'slides': [
            {
                'name': '1970',
                'description': 'Pink Floyd, Genesis, Yes.  Более сложные композиции и концептуальные альбомы.',
            },
            {
                'name': '1970',
                'description': 'Led Zeppelin, Deep Purple, Black Sabbath.  Более тяжелое звучание и мощная энергетика.',
            },
            {
                'name': '1975',
                'description': 'Ramones, Sex Pistols.  Протестное и бунтарское настроение.',
            },
            {
                'name': '1983',
                'description': 'The Police, Talking Heads.  Эксперименты со стилями и звучанием.',
            },
        ]
    },
    // {
    //     'sort': 2,
    //     'name': 'Космическая гонка',
    //     'interval': {
    //         'start': 1957,
    //         'end': 1975,
    //     },
    //     'slides': [
    //         {
    //             'name': '1957',
    //             'description': 'Первый спутник (СССР), полёт Гагарина (СССР).',
    //         },
    //         {
    //             'name': '1961',
    //             'description': 'Развитие космических программ в СССР и США.',
    //         },
    //         {
    //             'name': '1966',
    //             'description': 'Программа "Аполлон" (США), высадка человека на Луну.',
    //         },
    //         {
    //             'name': '1970',
    //             'description': 'Новые космические станции и проекты.',
    //         },
    //         {
    //             'name': '1973',
    //             'description': 'Начало сотрудничества между СССР и США в космосе.',
    //         },
    //     ]
    // },
    // {
    //     'sort': 3,
    //     'name': 'Видеоигры',
    //     'interval': {
    //         'start': 1972,
    //         'end': 1989,
    //     },
    //     'slides': [
    //         {
    //             'name': '1972',
    //             'description': 'Pong, Space Invaders.  Зарождение индустрии.',
    //         },
    //         {
    //             'name': '1977',
    //             'description': 'Pac-Man, Donkey Kong, Space Invaders.',
    //         },
    //         {
    //             'name': '1982',
    //             'description': 'NES, Sega Master System.  Домашние игровые консоли.',
    //         },
    //         {
    //             'name': '1986',
    //             'description': 'Появление новых жанров и игровых механик.',
    //         },
    //     ]
    // },
    // {
    //     'sort': 4,
    //     'name': 'Персональные компьютеры',
    //     'interval': {
    //         'start': 1975,
    //         'end': 1990,
    //     },
    //     'slides': [
    //         {
    //             'name': '1975',
    //             'description': 'Altair 8800, Apple II.  Начало персональной эры.',
    //         },
    //         {
    //             'name': '1980',
    //             'description': 'Распространение IBM PC и клонов.  Стандартизация.',
    //         },
    //         {
    //             'name': '1985',
    //             'description': 'Развитие графического интерфейса и операционных систем.',
    //         },
    //         {
    //             'name': '1990',
    //             'description': 'Появление новых технологий и архитектур.',
    //         },
    //     ]
    // },
    // {
    //     'sort': 5,
    //     'name': 'Мобильная связь',
    //     'interval': {
    //         'start': 1973,
    //         'end': 2000,
    //     },
    //     'slides': [
    //         {
    //             'name': '1970',
    //             'description': 'Развитие первых сотовых сетей.  Аналоговые системы.',
    //         },
    //         {
    //             'name': '1980',
    //             'description': 'Повсеместное внедрение аналоговых сотовых телефонов.',
    //         },
    //         {
    //             'name': '1990',
    //             'description': 'Появление цифровых сетей GSM. Новые стандарты связи.',
    //         },
    //     ]
    // },
];