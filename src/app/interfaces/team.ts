export interface Team {
    id: number,
    name: string,
    letters: string,
    group: number,
    played: number,
    won: number,
    drawn: number,
    lost: number,
    for: number,
    against: number,
    goalDifference: number,
    points: number,
    formGuide: string[]
}