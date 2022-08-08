export type BoardHeaderProps = {
    title: string;
    isFilterEnabled: boolean;
    searchEnabled: boolean;
    onClear: () => void
}

export type DashboardProps = {
    
}

export type ComicItemProps = {
    id: number;
    title: string;
    issueNumber: number;
    thumbnail: string;
}

export type BoardPaginationProps = {
    totalCount: number;
    onPaginationButtonClick: (page: number) => void;
    currentIndex: number;
}