import { Team } from "./team";

export interface Group {
    id: number,
    name: string,
    teams: Team[]
}