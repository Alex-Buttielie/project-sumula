import { DatePipe } from '@angular/common';

export class UtilDate {

    static formatarDataRest(value): string {
        const format = new DatePipe('pt');

        return format.transform(value, 'dd/MM/yyyy');
    }

    static formatarDataRestComHora(value): string {
        const format = new DatePipe('pt');

        return format.transform(value, 'yyyy-MM-dd HH:mm:ss');
    }

    static obterHora(value): string {
        const format = new DatePipe('pt');

        return format.transform(value, 'HH:mm');
    }

    static primeiroDiaMes(): Date {
        const date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    static ultimoDiaMes(): Date {
        const date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
}