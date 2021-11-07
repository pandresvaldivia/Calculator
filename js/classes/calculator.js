class Calculator {
	constructor(currentOperation, savedOperation) {
		this._outputOperation = currentOperation;
		this._outputSaved = savedOperation;
		this._currentOperand = '0';
		this._savedOperation = '';
		this._savedOperand = '';
		this._operation;
		this.consolePrint();
	}

	write(digit) {
		if (this._currentOperand === 'Math ERROR') this._currentOperand = '';

		this._currentOperand =
			this._currentOperand === '0' && digit !== '.'
				? digit
				: digit !== '.' || !this._currentOperand.toString().includes('.')
				? this._currentOperand + digit
				: this._currentOperand;
		this.consolePrint();
	}

	delete() {
		this._currentOperand = this._currentOperand.toString().slice(0, -1);
		this.consolePrint();
	}

	consolePrint() {
		this._outputSaved.innerText = this._operation ? this._savedOperation : '';
		this._outputOperation.innerText = this._currentOperand;
	}

	clear() {
		this._currentOperand = '0';
		this._savedOperation = '';
		this._savedOperand = '';
		this._operation = undefined;
		this.consolePrint();
	}

	convert(type) {
		this._currentOperand =
			type === '%' ? this._currentOperand / 100 : this._currentOperand * -1;

		this.consolePrint();
	}

	set operation(operation) {
		if (this._savedOperand !== '' && this._currentOperand !== 'Math ERROR') {
			this.calculate();
		}
		if (this._currentOperand !== 'Math ERROR') {
			this._operation = operation;
			this._savedOperation = `${this._currentOperand} ${operation}`;
			this._savedOperand = this._currentOperand;
			this._currentOperand = '0';
			this.consolePrint();
		}
	}

	calculate() {
		if (this._currentOperand === 'Math ERROR' || this._savedOperand === '')
			return;

		let result;
		switch (this._operation) {
			case 'x':
				result = this._savedOperand * this._currentOperand;
				break;
			case '+':
				result = Number(this._savedOperand) + Number(this._currentOperand);
				break;
			case '-':
				result = this._savedOperand - this._currentOperand;
				break;
			case '÷':
				result =
					this._currentOperand === '0'
						? this.mathError()
						: this._savedOperand / this._currentOperand;
				break;
			case '%':
				result = this._savedOperand / 100;
				break;

			default:
				break;
		}

		this._currentOperand = result;
		this._operation = undefined;
		this._savedOperand = '';
		this.consolePrint();
	}

	mathError() {
		this._savedOperation = '';
		this._savedOperand = '';
		this._operation = undefined;
		return 'Math ERROR';
	}
}

export default Calculator;
