export type Starship = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: Array<string>;
    films: Array<string>;
    created: string;
    edited: string;
    url: string;
};

export interface StarShipsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Starship>;
}
