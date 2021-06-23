
const clients = [
    {
        id: 1,
        firstName: 'Mike',
        lastName: 'Sheridan',
        address: '156 Marucci Place',
        city: 'Mays Landing',
        state: 'NJ',
        photoURL: "./images/1.png"
    }, 
    {
        id: 2,
        firstName: 'Natale',
        lastName: 'JoAnn',
        address: '33 Wilson Avenue',
        city: 'Somers Point',
        state: 'NJ',
        photoURL: "./images/2.png"
    }, 
    {
        id: 3,
        firstName: 'Julie',
        lastName: 'Broschard',
        address: '14 Cliveden Avenue',
        city: 'Somers Point',
        state: 'NJ',
        photoURL: "./images/3.png"
    }, 
    {
        id: 4,
        firstName: 'Rose',
        lastName: 'Pierre',
        address: '369 S Main Street',
        city: 'Williamstown',
        state: 'NJ',
        photoURL: "./images/4.png"
    }, 
    {
        id: 5,
        firstName: 'Jose',
        lastName: 'Cortez',
        address: '110 Ontario',
        city: 'Egg Harbor Township',
        state: 'NJ',
        photoURL: "./images/5.png"
    }, 
    {
        id: 6,
        firstName: 'Valentin',
        lastName: 'Villarreal',
        address: '206 Sun Valley',
        city: 'Egg Harbor Township',
        state: 'NJ',
        photoURL: "./images/6.png"
    }, 
    {
        id: 7,
        firstName: 'Dennis',
        lastName: 'Smith',
        address: '14 Royal Avenue',
        city: 'Egg Harbor Township',
        state: 'NJ',
        photoURL: "./images/7.png"
    }, 
    {
        id: 8,
        firstName: 'Jim',
        lastName: 'Canino',
        address: '2090 Ocean Heights Avenue',
        city: 'Egg Harbor Township',
        state: 'NJ',
        photoURL: "./images/8.png"
    }, 
    {
        id: 9,
        firstName: 'Bradley',
        lastName: 'Cooper',
        address: '1507 Monarch Place',
        city: 'Pleasantville',
        state: 'NJ',
        photoURL: "./images/9.png"
    }, 
    {
        id: 10,
        firstName: 'Kevin',
        lastName: 'Austin',
        address: '725 Oneida Avenue',
        city: 'Pleasantville',
        state: 'NJ',
        photoURL: "./images/10.png"
    }, 
    {
        id: 11,
        firstName: 'Tracy',
        lastName: 'Holland',
        address: '824 Cedar Lane',
        city: 'Pleasantville',
        state: 'NJ',
        photoURL: "./images/11.png"
    }, 
    {
        id: 12,
        firstName: 'Victoria',
        lastName: 'Dade',
        address: '605 N Edgely',
        city: 'Pleasantvile',
        state: 'NJ',
        photoURL: "./images/12.png"
    }, 
    {
        id: 13,
        firstName: 'Frank',
        lastName: 'Poltorak',
        address: '3505 Winchester Avenue',
        city: 'Atlantic City',
        state: 'NJ',
        photoURL: "./images/13.png"
    }, 
    {
        id: 14,
        firstName: 'John',
        lastName: 'Hutchinson',
        address: '121 E Evesham Avenue',
        city: 'Magnolia',
        state: 'NJ',
        photoURL: "./images/14.png"
    }, 
    {
        id: 15,
        firstName: 'Peggy',
        lastName: 'Eichelsderfer',
        address: '34 Melwood Court',
        city: 'Sicklerville',
        state: 'NJ',
        photoURL: "./images/15.png"
    }, 
    {
        id: 16,
        firstName: 'Reggie',
        lastName: 'Russell',
        address: '12 Westwood Drive',
        city: 'Howell',
        state: 'NJ',
        photoURL: "./images/16.png"
    }, 
    {
        id: 17,
        firstName: 'Lonni',
        lastName: 'Rutt',
        address: '20 Heggan Lane',
        city: 'Hammonton',
        state: 'NJ',
        photoURL: "./images/17.png"
    }, 
    {
        id: 18,
        firstName: 'Flotilde',
        lastName: 'Badner',
        address: '211 E Kelly Street',
        city: 'Absecon',
        state: 'NJ',
        photoURL: "./images/18.png"
    }, 
    {
        id: 19,
        firstName: 'Dani',
        lastName: 'Tobi',
        address: '202 Hollybrush Lane',
        city: 'Clementon',
        state: 'NJ',
        photoURL: "./images/19.png"
    }, 
    {
        id: 20,
        firstName: 'Nick',
        lastName: 'Mangruem',
        address: '7 Ross Street',
        city: 'Lumberton',
        state: 'NJ',
        photoURL: "./images/20.png"
    }, 
    {
        id: 21,
        firstName: 'Herbert',
        lastName: 'Guyton',
        address: '1540 Whispering Woods',
        city: 'Williamstown',
        state: 'NJ',
        photoURL: "./images/21.png"
    }, 
    {
        id: 22,
        firstName: 'MarGarita',
        lastName: 'Garces',
        address: '848 Raleigh Drive',
        city: 'Toms River',
        state: 'NJ',
        photoURL: "./images/22.png"
    }, 
    {
        id: 23,
        firstName: 'Aquilla',
        lastName: 'Wright',
        address: '48 Regency Place',
        city: 'Mount Holly',
        state: 'NJ',
        photoURL: "./images/23.png"
    }, 
    {
        id: 24,
        firstName: 'Veronica',
        lastName: 'Nate',
        address: '47 Botany Circle',
        city: 'Willingboro',
        state: 'NJ',
        photoURL: "./images/24.png"
    }, 
    {
        id: 25,
        firstName: 'Brad',
        lastName: 'Helm',
        address: '102 Sienna',
        city: 'Glassboro',
        state: 'NJ',
        photoURL: "./images/25.png"
    }, 
    {
        id: 26,
        firstName: 'Tom',
        lastName: 'Smith',
        address: '500 Kimberly Drive',
        city: 'Millville',
        state: 'NJ',
        photoURL: "./images/26.png"
    }, 
    {
        id: 27,
        firstName: 'Taylor',
        lastName: 'Speirs',
        address: '8 Andrea Drive',
        city: 'Absecon',
        state: 'NJ',
        photoURL: "./images/27.png"
    },
    {
        id: 28,
        firstName: 'Edwin',
        lastName: 'Fliedner',
        address: '523 Glenmere Avenue',
        city: 'Neptune',
        state: 'NJ',
        photoURL: "./images/28.png"
    }, 
    {
        id: 29,
        firstName: 'Hugh',
        lastName: 'McCarron',
        address: '8703 Amherst Rd',
        city: 'Margate',
        state: 'NJ',
        photoURL: "./images/29.png"
    }, 
    {
        id: 30,
        firstName: 'Scott',
        lastName: 'Marcus',
        address: '3 S Coolidge Avenue',
        city: 'Margate',
        state: 'NJ',
        photoURL: "./images/30.png"
    }, 
    {
        id: 31,
        firstName: 'Suzanne',
        lastName: 'Pendergast',
        address: '2151 Briarwood Avenue',
        city: 'Sea Girt',
        state: 'NJ',
        photoURL: "./images/31.png"
    }, 
    {
        id: 32,
        firstName: 'Kelley',
        lastName: 'Preski',
        address: '6 N Cornwall Avenue',
        city: 'Ventnor City',
        state: 'NJ',
        photoURL: "./images/32.png"
    }, 
    {
        id: 33,
        firstName: 'Krissy',
        lastName: 'Katzenstein',
        address: '1009 C Long Beach',
        city: 'Beach Haven',
        state: 'NJ',
        photoURL: "./images/33.png"
    }, 
    {
        id: 34,
        firstName: 'Julie',
        lastName: 'Hyland',
        address: '1563 Mill Creek Road',
        city: 'Manahawkin',
        state: 'NJ',
        photoURL: "./images/34.png"
    }, 
    {
        id: 35,
        firstName: 'Jack',
        lastName: 'Jephson',
        address: '2011 Asbury Avenue',
        city: 'Ocean City',
        state: 'NJ',
        photoURL: "./images/35.png"
    }, 
    {
        id: 36,
        firstName: 'Richard',
        lastName: 'Potts',
        address: '440 N North Carolina',
        city: 'Atlantic City',
        state: 'NJ',
        photoURL: "./images/36.png"
    }, 
    {
        id: 37,
        firstName: 'Mary',
        lastName: 'Ber',
        address: '83 Woodmere Road',
        city: 'Mays Landing',
        state: 'NJ',
        photoURL: "./images/37.png"
    },
    {
        id: 38,
        firstName: 'Nicholas',
        lastName: 'Mueller',
        address: '117 Hendrickson Avenue',
        city: 'Beverley',
        state: 'NJ',
        photoURL: "./images/38.png"
    }, 
    {
        id: 39,
        firstName: 'Andrew',
        lastName: 'Dipiero',
        address: '211 3rd Street',
        city: 'Brigantine',
        state: 'NJ',
        photoURL: "./images/39.png"
    }, 
    {
        id: 40,
        firstName: 'Vanessa',
        lastName: 'Mathis',
        address: '93 N Maple',
        city: 'New Gretna',
        state: 'NJ',
        photoURL: "./images/40.png"
    }, 
    {
        id: 41,
        firstName: 'Carmella',
        lastName: 'Basso',
        address: '116 Ruby Drive',
        city: 'Egg Harbor Township',
        state: 'NJ',
        photoURL: "./images/41.png"
    }, 
    {
        id: 42,
        firstName: 'Esther',
        lastName: 'Mummery',
        address: '2 Wilson Avenue',
        city: 'Glassboro',
        state: 'NJ',
        photoURL: "./images/42.png"
    }, 
    {
        id: 43,
        firstName: 'Nichole',
        lastName: 'Glennis',
        address: '1056 Old Freehold Road',
        city: 'Toms River',
        state: 'NJ',
        photoURL: "./images/43.png"
    }, 
    {
        id: 44,
        firstName: 'James',
        lastName: 'Maiiya',
        address: '205 Lakeside Drive',
        city: 'Glassboro',
        state: 'NJ',
        photoURL: "./images/44.png"
    }, 
    {
        id: 45,
        firstName: 'Geoff',
        lastName: 'Groff',
        address: '2633 6th Avenue',
        city: 'Hammonton',
        state: 'NJ',
        photoURL: "./images/45.png"
    } 
    
]



export default clients;