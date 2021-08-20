export class DonateForm {
    constructor() {
        this.form = document.createElement('form');
        this.form.className = 'donate-form'
    }
    render() {
        const h1 = document.createElement('h1')
        h1.textContent = '28$'
        h1.id = 'total-amount'
        this.form.append(h1)

        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = 'Введите сумму в $ '
        this.form.append(label)

        const input = document.createElement('input')
        input.setAttribute('name', 'amount')
        input.setAttribute('type', 'number')
        input.setAttribute('max', '100')
        input.setAttribute('min', '0')
        input.setAttribute('required', '')
        input.className = 'donate-form__donate-input'
        label.append(input)

        const button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.setAttribute('type', 'submit')
        button.textContent = 'Задонатить'
        this.form.append(button)
        return this.form
    }
}