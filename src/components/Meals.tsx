"use client";

import { useState, useEffect, ChangeEvent, MouseEvent } from "react";

// Define the types for the meal data
interface Meal {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
}

// Define the type for the API response
interface ApiResponse {
    meals: Meal[] | null;
}

// Define the component
const Meals: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        if (search.trim() === '') return; // Skip fetching if search is empty

        const loadData = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ApiResponse = await res.json();
                if (data.meals) {
                    setMeals(data.meals);
                    setError('');
                } else {
                    setMeals([]);
                    setError('No meals found');
                }
            } catch (error) {
                setError('Data not found');
            }
        };

        loadData();
    }, [search]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Perform the search based on the current input value
        if (search.trim() !== '') {
            setSearch(search);
        }
    };

    return (
        <div>
            <div>
                <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                    className="border-2 p-2 bg-orange-50"
                    placeholder="Search meal"
                />
                <button
                    type="button" // Prevents default form submission behavior
                    onClick={handleSearchClick}
                    className="border-2 p-2 bg-orange-500"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {meals.length > 0 && !error ? (
                    meals.map(({ idMeal, strMeal, strInstructions }) => (
                        <div key={idMeal} className="p-6 bg-orange-50">
                            <h3>{strMeal}</h3>
                            <p>{strInstructions}</p>
                        </div>
                    ))
                ) : (
                    <p>{error}</p>
                )}
            </div>
        </div>
    );
};

export default Meals;
