import * as fs from 'fs';

interface User {
    id: string;
    email: string;
    password: string;
}

class DB {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    private readFile(): User[] {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(data) as User[];
        } catch (error) {
            return [];
        }
    }

    private writeFile(records: User[]): void {
        const data = JSON.stringify(records, null, 2);
        fs.writeFileSync(this.filePath, data, 'utf-8');
    }

    create(userInfo: Pick<User, "email" | "password">): void {
        const records = this.readFile();
        const newRecord: User = {
            id: Date.now().toString(),
            ...userInfo

        };

        records.push(newRecord);
        this.writeFile(records);
    }

    get(email: string): User | null {
        const records = this.readFile();
        const record = records.find((user) => user.email === email);
        return record ? record : null;
    }
}


export const db = new DB('users.json'); 
