import React from "react";

const foodData = [
    {
        category: 'Beverage',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/buttermilk-recipe.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Cacao Chocolate',
                cost: '₹ 40',
                rating: 3.2,
                image: require('../assets/Bevrge/cacao-chocolate-hot.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Classic Hot Toddy',
                cost: '₹ 40',
                rating: 3.7,
                image: require('../assets/Bevrge/Classic_Hot_Toddy.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Coffee hot',
                cost: '₹ 40',
                rating: 4.8,
                image: require('../assets/Bevrge/coffee-hot.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Dairy milk drinks',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/dairy-milk-drinks.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'fruit juices drinks',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/fruit-juices-drinks.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Goan feni',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/goan-feni.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Masala Chai',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/Masala-Chai.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Soft drinks',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/soft-drinks.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
            {
                name: 'Thandai',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/Thandai.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },

        ],
    },
    {
        category: 'Breads',
        items: [
            {
                name: 'xyx breads',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/cacao-chocolate-hot.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Dessert',
        items: [
            {
                name: 'dessert',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/Thandai.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Chicken',
        items: [
            {
                name: 'chicken',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/soft-drinks.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Noddles',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/fruit-juices-drinks.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Paneer',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/buttermilk-recipe.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Pizza',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/buttermilk-recipe.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Rice & Biryani',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/buttermilk-recipe.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    },
    {
        category: 'Sweets',
        items: [
            {
                name: 'Buttermilk',
                cost: '₹ 40',
                rating: 4.2,
                image: require('../assets/Bevrge/buttermilk-recipe.jpg'),
                reviews: [
                    { rating: 4.5, reviewBy: 'Alice', review: 'Refreshing and delicious! Great taste, perfect for summer.' },
                    { rating: 3.8, reviewBy: 'Bob', review: 'Nice flavor, but a bit too sweet for my liking.' },
                    { rating: 4.0, reviewBy: 'Charlie', review: 'Highly recommended! Perfect balance of flavors.' },
                ]
            },
        ],
    }
];

export default foodData;