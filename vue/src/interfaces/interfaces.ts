export interface Starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [] | string[],
    films: string[],
    created: string,
    edited: string,
    url: string
};

export interface StarshipList {
    "count": number,
    "next": null | string,
    "previous": null | string,
    "results": Starship[],
}

export interface Users {
    "email": string,
    "password": string
}[]