import { HasFormatter } from "../interfaces/formatter.js";

export class ListTemplate{
    constructor(private wrap: HTMLUListElement){}

    render(obje: HasFormatter, title: string): void {
        let listItem = document.createElement('li');
        let heading = document.createElement('h3');
        let summary = document.createElement('p');

        heading.innerText = title;
        summary.innerText = obje.format();
        listItem.append(heading);
        listItem.append(summary);

        this.wrap.append(listItem);
    }
}
