export interface LinkModel {
    Id?:string,
    Href?:string,
    ClassList:string[],
    IsTooltip: boolean,
    Title?:string,
    Text?:string,
    OnClick?: (event: MouseEvent) => void
}
