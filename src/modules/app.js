import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';

export default class App {
    constructor() {
        this.DonateForm = new DonateForm()
        this.DonateList = new DonateList()
    }
    run() {
        const donateFormHTML = this.DonateForm.render()
        const DonateList = this.DonateList.render()
        document.body.append(donateFormHTML)
        document.body.append(DonateList)
    }
}