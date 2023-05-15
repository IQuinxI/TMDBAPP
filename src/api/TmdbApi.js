
const key = 'e49ce0c2b410727508ed3566f1dc7086';

import React from 'react'

export async function fetchFilm(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1`;
    const data = (await fetch(url)).json();

    return data;
}

