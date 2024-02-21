import { Adrress } from "./Address"
import { Company } from "./Company"

export interface Users {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Adrress
    phone: string,
    website: string,
    company: Company
}