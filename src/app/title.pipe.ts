import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'title'
})

export class TitlePipe implements PipeTransform {
    transform(value: string) {
        return this.titleCase(value);
    }

    titleCase(value: string) {
        value = value.toLowerCase();
        const valueArr = value.split(' ').map((word, index) => {
            if (index !== 0 && this.isPreposition(word)) {
                return word;
            }
            return this.capitalizeWord(word);
        });

        return valueArr.join(' ');
    }

    isPreposition(word: string) {
        const prepositions = ['the', 'of'];
        return prepositions.includes(word);
    }

    capitalizeWord(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
