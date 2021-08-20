export class DonateList {
    constructor(donates) {
        this.container = document.createElement('div');
        this.container.className = 'donates-container'
        this.donates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 2, date: new Date() },
        ];
    }
    render() {
        const h2 = document.createElement('h2')
        h2.textContent = 'Список донатов'
        h2.className = 'donates-container__title'
        this.container.append(h2)
        const div = document.createElement('div')
        div.className = 'donates-container__donates'
        this.container.append(div)

        this.donates.forEach((item) => {
            let innerDiv = document.createElement('div')
            innerDiv.className = 'donate-item'
            let bold = document.createElement('b')
            bold.textContent = `${item.amount}`
            innerDiv.textContent = `${item.date} `
            innerDiv.append(bold)
            div.append(innerDiv)
        })
        return this.container
    }
}