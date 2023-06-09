import { IMoviePopular } from "./type";

export const mockDataPopular: Array<IMoviePopular> = [
	{ 
        id:'popularity.desc',
        name: "Popular" },
	{ 
        id:'popularity.asc',
        name: "No popular" },
	{ 
        id:'revenue.desc',
        name: "revenue up" },
	{ 
        id:'revenue.asc',
        name: "revenue down" },
	{ 
        id:'primary_release_date.desc',
        name: "primar release date up" },
	{ 
        id:'primary_release_date.asc',
        name: "primar release date down"
    },
    { 
        id:'vote_average.asc',
        name: "vote average  down"
    },
    { 
        id:'vote_average.desc',
        name: "vote average up"
    },
    { 
        id:'vote_count.asc',
        name: "vote count down"
    },
    { 
        id:'vote_count.desc',
        name: "vote count up" },
];
