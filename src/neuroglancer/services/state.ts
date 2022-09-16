export interface State {
    state_id: number;
    owner: number;
    comments: string;
    user_date: string;
    url: Record<string, unknown>;
    readonly: boolean;
}

export interface Segmentation {
    url: string;
    name: string;
}
