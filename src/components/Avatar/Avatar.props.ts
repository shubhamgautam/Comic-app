
export type Avatar = {
    id: number;
    name: string;
    thumbnail: string;
    onAvatarSelect: (id: number, isSelected: boolean) => void;
    isSelected: boolean;
}