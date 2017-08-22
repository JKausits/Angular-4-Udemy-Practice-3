import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'title'
})

export class TitlePipe implements PipeTransform {
    transform(value: string) {
        const valueArr = value.split(' ').map((word, index) => {
            word = word.toLowerCase();
            if (word === 'the' && index !== 0 || word === 'of' && index !== 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return valueArr.join(' ');
    }
}