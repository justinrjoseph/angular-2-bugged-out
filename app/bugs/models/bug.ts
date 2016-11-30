export class Bug {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public status: number,
        public severity: number,
        public createdBy: string,
        public createdDate: number,
        public updatedBy?: string,
        public updatedDate?: number
    ) {}
}