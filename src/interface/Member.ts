export interface Member {
    id: string; // The member identifier
    name: string; // The full name of the member
    headline: string; // The headline of the member
    email: string; // The email address of the member
    role: 'admin' | 'simple' | 'reviewer'; // The member's role. Possible values are admin, simple and reviewer
}
