import Calculator from './classes/calculator.js';
import {
	$numbers,
	$result,
	$saved,
	$clear,
	$operations,
	$calculate,
	$conversions,
	$delete,
} from './selectors.js';

const calculator = new Calculator($result, $saved);

$clear.addEventListener('click', () => calculator.clear());
$calculate.addEventListener('click', () => calculator.calculate(true));
$delete.addEventListener('click', () => calculator.delete());

for (const $number of $numbers) {
	$number.addEventListener('click', () =>
		calculator.write($number.dataset.value)
	);
}

for (const $operation of $operations) {
	$operation.addEventListener(
		'click',
		() => (calculator.operation = $operation.dataset.operation)
	);
}

for (const $conversion of $conversions) {
	$conversion.addEventListener('click', () =>
		calculator.convert($conversion.dataset.conversion)
	);
}
