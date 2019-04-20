export class JwtResponse {
    accessToken: string;
    timeout: number;
    type: string;
    username: string;
    authorities: string[];
}